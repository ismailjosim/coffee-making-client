module.exports = {
  content: ["./src/**/*.{html,js,jsx, tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#E3B577",

          "secondary": "#ECEAE3",

          "accent": "#331A15",

          "neutral": "#F5F4F1",

          "base-100": "#FCFCFD",

          "info": "#3E6EE0",

          "success": "#28A46C",

          "warning": "#F3B062",

          "error": "#EA4744",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

