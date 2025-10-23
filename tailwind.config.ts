import type { Config } from 'tailwindcss'

export default {
    content: [
        './app/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                gold: '#C2A676',
                'brand-amber': '#C2A676',
                surface: {
                    DEFAULT: 'rgba(255, 255, 255, 0.05)',
                    hover: 'rgba(255, 255, 255, 0.08)',
                },
                neutral: {
                    300: '#D4D4D8',
                    400: '#A1A1AA',
                    500: '#71717A',
                },
            },
            boxShadow: {
                'card': '0 10px 30px -10px rgba(0, 0, 0, 0.6)',
                'card-hover': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
            },
            backgroundImage: {
                'radial-dark': 'radial-gradient(circle at 50% 0%, rgba(194, 166, 118, 0.1), transparent 50%)',
                'grid-pattern': 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
            },
            backgroundSize: {
                'grid': '50px 50px',
            },
        },
    },
    plugins: [],
} satisfies Config