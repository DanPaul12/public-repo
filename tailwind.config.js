/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx,tsx,ts}',
    './components/**/*.{js,jsx,tsx,ts}',
    './app/**/*.{js,jsx,tsx,ts}',
    './src/**/*.{js,jsx,tsx,ts}',
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
    mono: ['"Roboto Mono"', 'Menlo', '"Courier New"', 'monospace'],
    sans: [
      '"Source Sans 3"',
      '"Source Sans Pro"',
      '"Helvetica Neue"',
      'Helvetica',
      'Arial',
      'sans-serif',
    ],
    serif: [
      '"Source Serif 4"',
      '"Source Serif Pro"',
      'Georgia',
      'Times',
      '"Times New Roman"',
      'serif',
    ],
    slab: ['"Roboto Slab"', 'Georgia', 'Times', '"Times New Roman"', 'serif'],
    extend: {
      screens: {
        '2xl': '1440px',
        'xs': '500px',
      },

      fontFamily: {
        stanford: [
          'Stanford',
          '"Source Serif Pro"',
          'Georgia',
          'Times',
          '"Times New Roman"',
          'serif',
        ],
      },
      colors: {
        'digital-red': {
          DEFAULT: '#B1040E', // Same as old Bright Red in previous color palette
          light: '#E50808', // Same as old Vivid Red in previous color palette
          xlight: '#F83535', // Passed contrast test as regular text on black background
          dark: '#820000', // Same as Dark Cardinal Red in previous color palette
        },
        'cardinal-red': {
          DEFAULT: '#8C1515', // Passed contrast test as regular text on white background
          light: '#B1040E', // Same as old Bright Red in previous color palette
          xlight: '#E50808', // Same as old Vivid Red in previous color palette
          dark: '#820000', // Same as Dark Cardinal Red in previous color palette
        },
        
        black: "#2E2D29",
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
        fontFamily: {
          stanford: [
            'Stanford',
            '"Source Serif Pro"',
            'Georgia',
            'Times',
            '"Times New Roman"',
            'serif',
          ],

        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"),
  function ({ addComponents, theme, config }) {
    const stanford = config('theme.fontFamily.stanford').join(', ');

    const components = {
      // Center an element horizontally.
      '.centered-container, .cc': {
        paddingLeft: theme('decanter.screenMargins.xs'),
        paddingRight: theme('decanter.screenMargins.xs'),
        marginLeft: 'auto',
        marginRight: 'auto',
        // At 1700px (2xl breakpoint + twice the screen margins at 2xl), the max container width stays at 1500px.
        '@media only screen and (min-width: 1700px)': {
          paddingLeft: 'calc((100% - 1500px)/2)',
          paddingRight: 'calc((100% - 1500px)/2)',
        },
        '.centered-container, .cc': {
          paddingLeft: 0,
          paddingRight: 0,
        },
      },
      '.logo': {
        display: 'inline-block',
        fontFamily: stanford,
        fontWeight: theme('fontWeight.normal'),
        lineHeight: '0.75',
        textDecoration: 'none',
        textTransform: 'none',
        transform: 'translateZ(0)',
        fontStyle: 'normal',
        fontVariant: 'normal',
        letterSpacing: '0',
        color: theme('colors.cardinal-red.DEFAULT'),
        fontFeatureSettings: '"liga" 1',
        fontVariantLigatures: 'discretionary-ligatures',
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        '&:focus': {
          color: theme('colors.cardinal-red.DEFAULT'),
        },
        '&:hover': {
          color: theme('colors.cardinal-red.DEFAULT'),
        },
      },
    };

    addComponents(components);
  },

],
}