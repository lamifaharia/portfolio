/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0B0E14',
        surface: '#131720',
        surface2: '#1B212C',
        ink: '#E6E6E8',
        muted: '#8B92A8',
        cyan: '#4DEEEA',
        magenta: '#FF3EA5',
        green: '#39FF88',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glowCyan: '0 0 18px rgba(77,238,234,0.35)',
        glowMagenta: '0 0 18px rgba(255,62,165,0.35)',
      },
    },
  },
  plugins: [],
}