import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	safelist: [
		'animate-payroll-wiggle'
	],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				'site-bg': '#FFFDF6',
				'motee-green': '#8dca02',
				'motee-green-light': '#8dca02',
				'motee-green-dark': '#8dca02',
				'motee-orange': '#FF7D29',
				'motee-orange-light': '#F97316',
				'motee-orange-dark': '#C2410C',
				'motee-blue': '#1E40AF',
				'motee-blue-light': '#3B82F6',
				'motee-blue-dark': '#1E3A8A',
				'motee-gray': '#6B7280',
				'motee-gray-light': '#9CA3AF',
				'motee-gray-dark': '#374151'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-50px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'slide-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(50px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)'
					},
					'50%': {
						boxShadow: '0 0 40px rgba(59, 130, 246, 0.8)'
					}
				},
				'bounce-gentle': {
					'0%, 100%': {
						transform: 'translateY(-5%)',
						animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
					},
					'50%': {
						transform: 'translateY(0)',
						animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
					}
				},
				'float-side': {
					'0%, 100%': {
						transform: 'translateX(-10%)',
						animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
					},
					'50%': {
						transform: 'translateX(10%)',
						animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
					}
				},
				'rotate-float': {
					'0%': {
						transform: 'rotate(0deg) translateY(0)'
					},
					'50%': {
						transform: 'rotate(180deg) translateY(-10px)'
					},
					'100%': {
						transform: 'rotate(360deg) translateY(0)'
					}
				},
				'pulse-slow': {
					'0%, 100%': {
						opacity: '0.5'
					},
					'50%': {
						opacity: '1'
					}
				},
				'slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'payroll-wiggle': {
					'0%, 100%': { transform: 'rotate(-2deg) scale(1.05)' },
					'20%': { transform: 'rotate(2deg) scale(1.1)' },
					'40%': { transform: 'rotate(-2deg) scale(1.05)' },
					'60%': { transform: 'rotate(2deg) scale(1.1)' },
					'80%': { transform: 'rotate(-2deg) scale(1.05)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.8s ease-out',
				'slide-in-left': 'slide-in-left 0.8s ease-out',
				'slide-in-right': 'slide-in-right 0.8s ease-out',
				'scale-in': 'scale-in 0.6s ease-out',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'bounce-gentle': 'bounce-gentle 3s infinite',
				'float-side': 'float-side 6s infinite',
				'rotate-float': 'rotate-float 8s infinite linear',
				'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
				'slide-up': 'slide-up 0.6s ease-out',
				'payroll-wiggle': 'payroll-wiggle 2s infinite',
			},
			backgroundImage: {
				'mesh-background': 'linear-gradient(to bottom right, rgba(5, 150, 105, 0.1), rgba(234, 88, 12, 0.1))'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
