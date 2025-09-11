import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
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
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      maxWidth: {
        container: "1280px",
      },
      screens: {
        'fhd': '1920px',
      },
      scale: {
        '175': '1.75',
        '200': '2.0',
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        grotesk: ["'Space Grotesk'", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        "dm-sans": ["DM Sans", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
      },
      height: {
        "4.5": "1.125rem", // 18px - for demand-sense.svg (25% smaller than 24px)
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Custom colors for Pricing section
        'dyad-blue': '#4A3AFF',
        'dyad-dark-text': '#170F49',
        'dyad-gray-text': '#514F6E',
        'dyad-light-gray-text': '#A0A3BD',
        'dyad-feature-text': '#6F6C8F',
        'dyad-enterprise-text': '#EAE8FF',
        'dyad-grid-border': '#F1F2F9',
        'dyad-grid-bg-light': '#FBFE',
        'dyad-grid-bg-medium': 'rgba(241, 240, 251, 0.33)', // This will be handled with opacity directly
        // Custom colors for Features section
        'feature-dark-text': '#0D0E14',
        'feature-gray-text': '#4D4F5C',
        'feature-light-green': '#63FF8F',
        'feature-border': '#E5E7EB',
        'feature-bg-light': '#F8F8F8',
        'feature-bg-selected': '#F0F2F5',
        'feature-icon-bg': '#E0E0E0',
        'feature-yellow': '#FBC45C',
        'feature-blue': '#3E68FF',
        'feature-red': '#FF4747',
        'feature-orange': '#FF9500',
        'feature-purple': '#9B59B6',
        'feature-teal': '#00B8D9',
        // Custom colors for Testimonials section
        'testimonial-dark': '#0D0D0D',
        'testimonial-name': '#1D1D1D',
        'testimonial-text': '#333333',
        'testimonial-gray': '#666666',
        'testimonial-border': '#DEE5ED',
        'testimonial-star': '#FFD700',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        marquee: {
            from: { transform: 'translateX(0)' },
            to: { transform: 'translateX(calc(-100% - var(--gap)))' }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: 'marquee var(--duration) linear infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;