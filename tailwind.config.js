/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                greenSpecial80: "#c5dfd6",
                greenSpecial40: "#dae8df",
                greenSpecial20: "#e9f2e8",
                whiteTheme80: "#fcfbf4",
                blackTextMain: "#0e0e0f"
            }
        }
    },
    plugins: []
};