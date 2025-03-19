/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    blue: '#1B3B6F',
                    green: '#7AB547',
                    lightBlue: '#2563eb',
                },
                primary: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#1B3B6F',
                    600: '#164169',
                    700: '#114563',
                    800: '#0c3a5c',
                    900: '#082f55',
                },
                secondary: {
                    50: '#f0fdf4',
                    100: '#dcfce7',
                    200: '#bbf7d0',
                    300: '#86efac',
                    400: '#7AB547',
                    500: '#6aa43d',
                    600: '#5a9333',
                    700: '#4a8229',
                    800: '#3a711f',
                    900: '#2a6015',
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
} 