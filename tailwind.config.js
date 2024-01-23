/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            animation: {
                'background-shine': 'background-shine 2s linear infinite',
            },
            keyframes: {
                'background-shine': {
                    from: {
                        backgroundPosition: '0 0',
                    },
                    to: {
                        backgroundPosition: '-200% 0',
                    },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                primary: {
                    50: '#effaff',
                    100: '#def3ff',
                    200: '#b6eaff',
                    300: '#75dbff',
                    400: '#2cc9ff',
                    500: '#00a8e8', //main
                    600: '#008fd4',
                    700: '#0072ab',
                    800: '#00608d',
                    900: '#065074',
                    950: '#04334d',
                },
                daintree: {
                    50: '#e9fffe',
                    100: '#c9fffe',
                    200: '#99ffff',
                    300: '#54fbff',
                    400: '#07edff',
                    500: '#00cfef',
                    600: '#00a4c9',
                    700: '#0082a1',
                    800: '#086882',
                    900: '#0c556d',
                    950: '#00171f',
                },
                crusta: {
                    50: '#fff6ed',
                    100: '#ffebd4',
                    200: '#ffd2a9',
                    300: '#ffb272',
                    400: '#fe7f2d',
                    500: '#fd6412',
                    600: '#ee4a08',
                    700: '#c53509',
                    800: '#9c2b10',
                    900: '#7e2610',
                    950: '#440f06',
                },
                dark: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a',
                    950: '#020617',
                },
            },
        },
    },
    darkMode: 'class',
    animation: {
        'background-shine': 'background-shine 2s linear infinite',
    },
    keyframes: {
        'background-shine': {
            from: {
                backgroundPosition: '0 0',
            },
            to: {
                backgroundPosition: '-200% 0',
            },
        },
    },
    plugins: [],
}
