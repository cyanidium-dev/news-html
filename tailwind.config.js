module.exports = {
  content: ['./src/**/*.html', './src/**/*.js'],
  theme: {
    extend: {
      screens: {
        s: '384px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
      colors: {
        white: '#FFFFFF',
        textColor: '#0D0C1C',
        black: '#000000',
        accent: '#7869FF',
        lightAccent: '#F5F4FD',
        darkAccent: '#3C347F',
        bg: '#F4F4F4',
        mint: '#68FFB5',
        neutral: '#727175',
        borders: '#E8E8E8',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        unbounded: ['Unbounded', 'sans-serif'],
      },
      fontSize: {
        xxs: [
          'clamp(10px, 1.4vw, 12px)',
          { lineHeight: '1.4', fontWeight: '500' },
        ],
        xs: [
          'clamp(14px, 1.8vw, 16px)',
          { lineHeight: '1.5', fontWeight: '700' },
        ],
        s: ['clamp(14px, 2vw, 18px)', { lineHeight: '1.5', fontWeight: '500' }],
        sm: ['clamp(16px, 2.3vw, 20px)', { lineHeight: '1.4' }],
        m: ['18px', { lineHeight: '1.4', fontWeight: '500' }],
        ml: [
          'clamp(20px, 2.8vw, 24px)',
          { lineHeight: '1.4', fontWeight: '500' },
        ],
        lg: [
          'clamp(24px, 4.6vw, 40px)',
          { lineHeight: '1.23', fontWeight: '500' },
        ],
      },
    },
  },
  plugins: [],
};
