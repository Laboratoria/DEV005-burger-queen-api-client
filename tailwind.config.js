/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                brown: "#9B1B1B",
                yellow: "#FAD554",
            },
            fontFamily: {
                roboto: "roboto",
                Montserrat: "montserrat",
            },
        },
    },
    plugins: [],
};
