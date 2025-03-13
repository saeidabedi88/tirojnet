# TirojNet Website

A modern, responsive website for TirojNet, a network solutions company based in Ontario, Canada. The website is built using Next.js, TypeScript, and Tailwind CSS.

## Features

- Modern, responsive design
- Mobile-first approach
- SEO optimized
- Fast performance
- Client/admin portal access
- Contact form with Google Maps integration
- Service showcase
- About page with team section

## Tech Stack

- **Frontend Framework**: Next.js 13+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended)
- **Form Handling**: React Hook Form (to be implemented)
- **Authentication**: NextAuth.js (to be implemented)

## Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/tirojnet.git
cd tirojnet
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add the following variables:
```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
tirojnet/
├── src/
│   ├── app/                    # Next.js 13+ App Router pages
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── login/             # Login page
│   │   ├── services/          # Services page
│   │   └── page.tsx           # Home page
│   ├── components/            # React components
│   │   └── layout/           # Layout components
│   └── styles/               # Global styles
├── public/                   # Static files
│   └── images/              # Image assets
├── package.json             # Project dependencies
└── README.md               # Project documentation
```

## Development

### Code Style

This project uses ESLint and Prettier for code formatting. To format your code:

```bash
npm run format
# or
yarn format
```

### Building for Production

```bash
npm run build
# or
yarn build
```

### Running Tests

```bash
npm run test
# or
yarn test
```

## Deployment

The recommended deployment platform is Vercel. To deploy:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables in Vercel
4. Deploy!

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or concerns, please contact:
- Email: info@tirojnet.com
- Phone: (555) 123-4567
- Address: 123 Business Street, Toronto, ON M5V 2L7, Canada 