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
            },
        },
    },
    plugins: [],
} satisfies Config