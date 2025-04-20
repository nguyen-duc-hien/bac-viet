tailwind.config = {
    theme: {
        extend: {
            screens: {
                '3xl': '1440px',
                '2xl': '1280px',
                xl: '1024px',
                lg: '992px',
                md: '768px',
                sm: '525px',
                DEFAULT: '1360px',
            },
            container: {
                center: true,
                maxWidth: '1920px',
                padding: {
                    DEFAULT: '24px',
                    '3xl': '40px',
                    '2xl': '40px',
                    xl: '40px',
                    lg: '24px',
                    md: '24px',
                    sm: '24px',
                },
            },
        },
        colors: {
            white: '#FFF',
            black: '#000',
            primary: {
                DEFAULT: "#FFE160",
                '2': "#976629",
                // 600: '#2955D9',
                // 500: '#4169E1',
                // 400: '#587AE1',
                // 300: '#6E8BE1',
                // 200: '#9BACE0',
                // 100: '#CCD4ED',
                50: '#fcfaf7',
                25: '#EFEFEF',
            },
            secondary: '#FFF5D5',
            neutralc: {
                // 1000: "#",
                950: "#0D0D0D",
                900: "#1A1A1A",
                800: "#333333",
                700: "#4D4D4D",
                600: "#666666",
                500: "#222222",
                400: "#999999",
                300: "#B3B3B3",
                200: "#CCCCCC",
                100: "#E6E6E6",
                50: "#F2F2F2",
            },
            mono: {
                dark: {
                    90: '#151515',
                },
            },
            gray: {
                10: "#112722",
                9: "#1F2237",
                8: "#373A51",
                7: "#4B4E63",
                6: "#6B7280",
                3: "#E5E7EB",
                2: "#F3F4F6",
                1: "#F9FAFB",
            },
        }
    }
}