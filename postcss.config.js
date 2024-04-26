module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("postcss-preset-env")({
      stage: 2,
      features: {
        "custom-properties": {
          preserve: true,
          fallback: true, // Automatically create fallbacks
        },
      },
    }),
  ],
};
