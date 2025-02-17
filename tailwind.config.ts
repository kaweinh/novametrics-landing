import type { Config } from 'tailwindcss'

const config: Config = {
  safelist: [
    'grid-cols-1',
    'grid-cols-2',
    'grid-cols-3',
    'grid-cols-4',
    'grid-cols-5',
    'grid-cols-6',
    'grid-cols-7',
    'grid-cols-8',
    'grid-cols-9',
    'grid-cols-10',

    'bg-primary-dark',
    'bg-primary-dull',
    'bg-primary',
    'bg-primary-soft',
    'bg-primary-softer',
    'bg-primary-light',

    'bg-accent',
    'bg-accent-dark',
    'bg-accent-light',
    'bg-accent-soft',

    'bg-neutral-white',
    'bg-neutral-brown-orange',
    'bg-neutral-brown',

    'border-primary-dark',
    'border-primary-dull',
    'border-primary',
    'border-primary-soft',
    'border-primary-softer',
    'border-primary-light',

    'text-neutral-white',
    'border-neutral-white'
  ],
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
        'my-white-see-thru-nav': 'rgba(255,255,255, 0.5)',

        'my-midnight-blue-see-thru': 'rgba(17,17,51, 0.3)',
        'my-green-blue-see-thru': 'rgba(17,70, 70, 0.3)',
        'my-baby-yellow': '#F9F7F4',
        'my-white-see-thru': 'rgba(255, 255, 255, 0.4)',
        'primary-dull-see-thru': 'rgba(49, 78, 120, 0.4)',

        'primary-dark': '#111133',
        'primary-dull': '#3A506B',
//        'primary': '#86305D',
        'primary': '#0D5CC8',
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
      },
    },
  },
  plugins: [
    function ({ addUtilities } : { addUtilities: Function }) {
      const newUtilities = {
        '.curve-bottom-desktop': {
          clipPath: 'ellipse(100% 95% at 50% 0%);',
        },
        '.curve-bottom-mobile': {
          clipPath: 'ellipse(180% 90% at 50% 0%)',
        },
        '.curve-top-desktop': {
          clipPath: 'ellipse(100% 95% at 50% 95%)'
        },
        '.curve-top-mobile': {
          clipPath: 'ellipse(380% 95% at 50% 95%)'
        },
      }
      addUtilities(newUtilities, ["responsive", "hover"])
    }
  ],
}
export default config
