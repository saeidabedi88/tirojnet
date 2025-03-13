#!/bin/bash

# Update system
echo "Updating system..."
sudo apt update && sudo apt upgrade -y

# Install required packages
echo "Installing required packages..."
sudo apt install -y curl git nginx certbot python3-certbot-nginx

# Install Docker
echo "Installing Docker..."
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Install Docker Compose
echo "Installing Docker Compose..."
sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Create application directory
echo "Creating application directory..."
sudo mkdir -p /var/www/tirojnet
sudo chown -R $USER:$USER /var/www/tirojnet

# Copy application files
echo "Copying application files..."
cp -r ./* /var/www/tirojnet/

# Generate NEXTAUTH_SECRET
echo "Generating NEXTAUTH_SECRET..."
NEXTAUTH_SECRET=$(openssl rand -base64 32)
sed -i "s/your_nextauth_secret_here/$NEXTAUTH_SECRET/" /var/www/tirojnet/.env

# Update domain in configuration files
echo "Updating domain configuration..."
sed -i "s/your-domain.com/tirojnet.ca/" /var/www/tirojnet/.env
sed -i "s/your-domain.com/tirojnet.ca/" /var/www/tirojnet/nginx.conf

# Copy Nginx configuration
echo "Setting up Nginx configuration..."
sudo cp /var/www/tirojnet/nginx.conf /etc/nginx/sites-available/tirojnet
sudo ln -sf /etc/nginx/sites-available/tirojnet /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Test Nginx configuration
echo "Testing Nginx configuration..."
sudo nginx -t

# Restart Nginx
echo "Restarting Nginx..."
sudo systemctl restart nginx

# Set up SSL with Certbot
echo "Setting up SSL certificate..."
sudo certbot --nginx -d tirojnet.ca --non-interactive --agree-tos --email saeid@tirojnet.ca

# Build and start Docker containers
echo "Building and starting Docker containers..."
cd /var/www/tirojnet
docker-compose up -d --build

echo "Deployment completed successfully!"
echo "Please check the application logs with: docker-compose logs -f" 