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
        'my-baby-blue': '#f0f6fc',
        'my-baby-purple': '#EDEBF1',
        'my-midnight-blue': '#111133',
        'my-purple-medium': '#672672',
        'my-pink-very-light': '#F5F3F7',
        'my-black-see-thru': 'rgba(0,0,0, 0.3)',
        'my-midnight-blue-see-thru': 'rgba(17,17,51, 0.3)',
        'my-green-blue-see-thru': 'rgba(17,70, 70, 0.3)',
        'my-baby-yellow': '#F9F7F4',

        'primary-dark': '#111133',
        'primary-dull': '#314E78',
        'primary': '#1A51AA',
        'primary-soft': '#5C9DFF',
        'primary-softer': '#99C2FF',
        'primary-light': '#AEDFF8',

        'accent': '#58A55D',
        'accent-dark': '#496F5D',
        'accent-light': '#97D8B2',
        'accent-soft': '#CEDFD6',

        'neutral-white': '#EAE8E1',
        'neutral-brown-orange': '#E1D7CA',
        'neutral-brown': '#DBD6C6',
        'neutral-gray-light': '#B4B4B4',
        'neutral-gray-dark': '#6E7173'
      },
      fontFamily: {
        'mukta-mahee': ['Mukta Mahee']
      }
    },
  },
  plugins: [],
}
export default config
