/** Every colour is driven by the CSS custom properties declared in
 *  src/index.css (`:root` for light, `.dark` for dark). Using the
 *  `rgb(var(--token) / <alpha-value>)` form keeps Tailwind's opacity
 *  modifiers (`text-onInverse/70`) working while letting the theme swap
 *  with a single class on <html>. */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: token('canvas'),
        surface: token('surface'),
        raised: token('raised'),
        ink: token('ink'),
        body: token('body'),
        muted: token('muted'),
        subtle: token('subtle'),
        faint: token('faint'),
        hairline: token('hairline'),
        hairlineSoft: token('hairline-soft'),
        wash: token('wash'),
        solid: {
          DEFAULT: token('solid'),
          hover: token('solid-hover'),
        },
        onSolid: token('on-solid'),
        inverse: token('inverse'),
        onInverse: token('on-inverse'),
        accent: {
          DEFAULT: token('accent'),
          bright: token('accent-bright'),
          soft: token('accent-soft'),
          border: token('accent-border'),
          300: token('accent-300'),
          400: token('accent-400'),
          500: token('accent-500'),
        },
        highlight: token('highlight'),
        positive: token('positive'),
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
          '0 1px 2px rgba(0, 0, 0, calc(var(--shadow-strength) * 0.2)), 0 34px 64px -20px rgba(0, 0, 0, var(--shadow-strength))',
        card: '0 22px 44px -14px rgba(0, 0, 0, calc(var(--shadow-strength) * 0.9))',
        chip: '0 18px 36px -12px rgba(0, 0, 0, calc(var(--shadow-strength) * 0.8))',
        accent:
          '0 1px 2px rgba(0, 0, 0, calc(var(--shadow-strength) * 0.2)), 0 6px 16px rgb(var(--accent) / 0.18)',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
}
