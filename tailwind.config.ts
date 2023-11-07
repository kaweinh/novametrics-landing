import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'my-baby-blue': '#EEF4FB',
        'my-baby-purple': '#EBE8EF',
        'my-midnight-blue': '#111133',
        'my-purple-medium': '#672672',
        'my-pink-very-light': '#F5F3F7',
        'my-black-see-thru': 'rgba(0,0,0, 0.3)',
        'my-midnight-blue-see-thru': 'rgba(17,17,51, 0.3)',
        'my-green-blue-see-thru': 'rgba(17,70, 70, 0.3)',
        'my-baby-yellow': '#F9F7F4',

      },
      fontFamily: {
        'mukta-mahee': ['Mukta Mahee']
      }
    },
  },
  plugins: [],
}
export default config
