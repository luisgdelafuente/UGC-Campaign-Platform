export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        canvas: '#FAFAF9',
        surface: '#FFFFFF',
        raised: '#FCFCFB',
        ink: '#0B0B0F',
        body: '#44403C',
        muted: '#57534E',
        subtle: '#78716C',
        faint: '#A8A29E',
        hairline: '#E7E5E4',
        hairlineSoft: '#EFEDEB',
        wash: '#F7F6F5',
        accent: {
          DEFAULT: '#5B2BFF',
          soft: '#F3EFFF',
          border: '#EAE1FF',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
        },
        positive: '#16A34A',
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      letterSpacing: {
        display: '-0.03em',
      },
      borderRadius: {
        xl: '12px',
        '2xl': '16px',
        '3xl': '20px',
      },
      boxShadow: {
        frame:
          '0 1px 2px rgba(11,11,15,0.04), 0 34px 64px -20px rgba(11,11,15,0.20)',
        card: '0 22px 44px -14px rgba(11,11,15,0.18)',
        chip: '0 18px 36px -12px rgba(11,11,15,0.16)',
        accent:
          '0 1px 2px rgba(11,11,15,0.04), 0 6px 16px rgba(91,43,255,0.18)',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
}
