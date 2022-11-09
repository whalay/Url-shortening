/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'Cyan': 'hsl(180, 66%, 49%)',
                'Dark_Violet': 'hsl(257, 27%, 26%)',
                'Red': 'hsl(0, 87%, 67%)',

                'Gray': 'hsl(0, 0%, 75%)',
                'Grayish_Violet': 'hsl(257, 7%, 63%)',
                'Very Dark Blue': 'hsl(255, 11%, 22%)',
                'Very Dark Violet': 'hsl(260, 8%, 14%)',


            },
            backgroundImage: {
                'heroD': "url('./assets/images/bg-hero-desktop.svg')",
                'brand': "url('./assets/images/icon-brand-recognition.svg')",
                'detailed': "url('./assets/images/icon-detailed-records.svg')",
                'fully': "url('./assets/images/icon-fully-customizable.svg')",
                'boostD': "url('./assets/images/bg-boost-desktop.svg')",
                'boostM': "url('./assets/images/bg-boost-mobile.svg')",
                'heroM': "url('./assets/images/bg-hero-mobile.svg')"
            },
        },
    },
    plugins: [],
}