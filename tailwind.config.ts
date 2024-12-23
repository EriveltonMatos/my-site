import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		animation: {
			'scroll-left': 'scroll-left 40s linear infinite',
		  },
		  keyframes: {
			'scroll-left': {
			  '0%': { transform: 'translateX(100%)' },
			  '100%': { transform: 'translateX(-100%)' },
			},
		  },
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
			primary: '#24DFFE',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
	require("tailwindcss-animate"),
  ],
};
export default config;
