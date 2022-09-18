/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    theme: {
    
        extend: {
            screens: {
                'ssm': '280px',
                'ssmm': '350px',
                'sssmmm': '500px',
                'small': {'max': '499px'},
                'sm': '640px',
                'ssmall': {'max': '641px'},
                'md': '768px', 
                'med': {'max': '768px'},
                'mmd': '800px',
                'lg': {'max': '1050px'},
                'xl': '1280px',
                'xxl': {'max': '1320px'},
                '2xl': '1536px',
            },
        
        },
    },
    plugins: [],
}