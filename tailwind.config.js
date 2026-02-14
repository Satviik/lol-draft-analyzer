/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#020617',
        'bg-medium': '#0F172A',
        'border': '#334155',
        'blue-team': '#3B82F6',
        'red-team': '#EF4444',
        'card-bg': '#1E293B',
        'text-gray': '#94A3B8',
        'gold': '#C89B3C',
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'card': '16px',
        'slot': '12px',
        'champ': '12px',
        'champ-img': '8px',
        'search': '10px',
      },
      boxShadow: {
        'gold-glow': '0px 0px 12px 0px rgba(251, 191, 36, 0.35)',
        'gold-glow-strong': '0px 0px 18px 0px rgba(251, 191, 36, 1)',
      },
    },
  },
  plugins: [],
}
