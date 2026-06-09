import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        'card-foreground': 'hsl(var(--card-foreground))',
        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        accent: 'hsl(var(--accent))',
        'accent-foreground': 'hsl(var(--accent-foreground))',
        border: 'hsl(var(--border))',
        ring: 'hsl(var(--ring))',
        brand: {
          50: '#eef5ff',
          100: '#dbe7ff',
          200: '#b8ceff',
          300: '#8fb0ff',
          400: '#6d8dff',
          500: '#4f6dff',
          600: '#3650df',
          700: '#293db4',
          800: '#23358f',
          900: '#202f72',
        },
        sand: {
          50: '#fdf8f0',
          100: '#f8ead3',
          200: '#f0d1a6',
          300: '#e6b06c',
          400: '#d38a3e',
          500: '#bc6e22',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(107, 139, 255, 0.18), 0 18px 70px rgba(10, 14, 28, 0.45)',
      },
      backgroundImage: {
        'brand-radial': 'radial-gradient(circle at top, rgba(79,109,255,0.22), transparent 34%), radial-gradient(circle at bottom right, rgba(188,110,34,0.18), transparent 24%)',
        'mesh-dark': 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        pulseSoft: 'pulseSoft 5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.9' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
