import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#211F1C',
        'ink-soft': '#6B675E',
        paper: '#FCFBF7',
        'paper-alt': '#F2ECDE',
        indigo: { DEFAULT: '#1B2340', deep: '#12172A' },
        gold: { DEFAULT: '#D9A441', deep: '#8C6420', pale: '#F4E3C1' },
        sage: { DEFAULT: '#5E7052', soft: '#E6EBDD' }
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-plex-mono)', 'ui-monospace', 'monospace']
      },
      borderColor: {
        DEFAULT: 'rgba(33,31,28,0.12)'
      }
    }
  },
  plugins: []
};

export default config;
