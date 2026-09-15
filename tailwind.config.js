/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
                mono: ['Space Grotesk', 'monospace'],
            },
            colors: {
                bg: "#030014", // Deep space blue/black
                primary: "#00F0FF", // Neon Cyan
                secondary: "#7000FF", // Deep Violet
                accent: "#FF0055", // Hot Pink
                glass: "rgba(255, 255, 255, 0.03)",
                "glass-border": "rgba(255, 255, 255, 0.08)",
            },
            animation: {
                blob: "blob 10s infinite",
                "spin-slow": "spin 20s linear infinite",
                float: "float 6s ease-in-out infinite",
            },
            keyframes: {
                blob: {
                    "0%": { transform: "translate(0px, 0px) scale(1)" },
                    "33%": { transform: "translate(30px, -50px) scale(1.1)" },
                    "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
                    "100%": { transform: "translate(0px, 0px) scale(1)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-20px)" },
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
}
