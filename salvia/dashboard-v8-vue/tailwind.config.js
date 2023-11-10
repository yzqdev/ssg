module.exports = {
  content: ['./src/**/*.{js,vue}', './public/index.html'],
  theme: {
    extend: {
      width: {
        99: 'calc(100% - 16rem);' /* get the width of the main content from lg:viewport by dividing
        (the total width by the width of the side navigation)*/,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
