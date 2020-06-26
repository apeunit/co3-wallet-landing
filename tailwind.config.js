module.exports = {
  important: true,
  purge: [
    './src/**/*.html',
  ],
  theme: {
    fontFamily: {
      body: ['"Open Sans"', 'sans-serif'],
      title: ['Montserrat', 'sans-serif'],
      logo: ['"Major Mono Display"', 'monospace'],
    },
    colors: {
      indigo: {
        default: '#3752f5',
        600: '#3752f5',
      },
      black: {
        100: '#E8E7E7',
        200: '#C4C3C4',
        300: '#A19FA0',
        400: '#5B5858',
        default: '#141011',
        600: '#120E0F',
        700: '#0C0A0A',
        800: '#090708',
        900: '#060505',
      },
      white: {
        default: '#ffffff',
      },
      purple: {
        default: '#12ffc6',
      },
    }
  },
  variants: {},
  plugins: [],
}
