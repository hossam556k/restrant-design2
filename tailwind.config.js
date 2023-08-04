/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes:{
        moveup:{
          "0%":{transform: "translateY(500px)"},
          "100%":{transform:  "translateX(0)"},
          
        },
        moveright:{
          "0%":{transform: "translateX(-500px)"},
          "100%":{transform:  "translateX(0)"},
          
        },

      },
      animation:{
        moveup:"moveup 2s ease-in-out 1",
        moveright:"moveright 3s ease-in-out 1",
      }
      
    },
  },
  plugins: [],
}
