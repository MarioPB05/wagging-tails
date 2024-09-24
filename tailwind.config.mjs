/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "var(--color-primary)",
				secondary: "var(--color-secondary)",
			},
			textColor: {
				default: "var(--color-text)",
				offset: "var(--color-text-offset)",
			},
			backgroundColor: {
				default: "var(--color-background)",
				offset: "var(--color-background-offset)",
			},
			borderColor: {
				default: "var(--color-border)",
			},
			keyframes: {
				animatedgradient: {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' },
				},
				slideInFromLeft: {
					'0%': {
						transform: 'translateX(-100%)',
						opacity: '0',
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1',
					},
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': {
						transform: 'translateY(40px)',
						opacity: '0',
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1',
					},
				},
			},
			backgroundSize: {
				'400%': '400%',
			},
			animation: {
				gradient: 'animatedgradient 6s ease infinite alternate',
				slideIn: 'slideInFromLeft 1s ease-out forwards',
				fadeIn: 'fadeIn 2s ease-out',
				slideUp: 'slideUp 0.5s ease-out forwards',
			},
			animationDelay: {
				'100': '0.2s',
				'200': '0.4s',
				'300': '0.8s',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
