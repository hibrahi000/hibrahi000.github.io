/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          'Inter',
          'system-ui',
          'sans-serif'
        ],
        mono: [
          '"SF Mono"',
          '"JetBrains Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'monospace'
        ],
      },
      colors: {
        apple: {
          black: '#000000',
          obsidian: '#060709',
          carbon: '#0d0e12',
          surface: '#13151b',
          elevated: '#1b1e26',
          border: 'rgba(255, 255, 255, 0.08)',
          blue: '#0071e3',
          azure: '#2997ff',
          cyan: '#38bdf8',
          emerald: '#10b981',
          amber: '#f59e0b',
          gray: {
            100: '#f5f5f7',
            200: '#e8e8ed',
            300: '#d2d2d7',
            400: '#86868b',
            500: '#6e6e73',
            600: '#424245',
          }
        }
      },
      boxShadow: {
        'bento': '0 20px 50px rgba(0, 0, 0, 0.6), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
        'bento-hover': '0 24px 60px rgba(0, 113, 227, 0.14), inset 0 1px 0 0 rgba(255, 255, 255, 0.18)',
        'azure-glow': '0 0 30px rgba(41, 151, 255, 0.35)',
      },
      animation: {
        'pulse-slow': 'pulse 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
