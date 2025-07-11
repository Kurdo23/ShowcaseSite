/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'custom-neon-blue': '#00CFFF', // Element interactif (bouton, liens)
        'custom-deep-blue': '#081B36', // Fond principal
        'custom-neon-violet': '#B400FF', // Accents, détails graphiques
        'custom-electric-blue': '#0A84FF', // Hover, focus
        'custom-dark-indigo': '#121D40' // Sections ou cartes secondaires
      },
    },
  },
  plugins: [],
}

