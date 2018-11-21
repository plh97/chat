// next.config.js
const withCSS = require('@zeit/next-css')
// module.exports = withCSS({
//   // cssModules: true,
//   // cssLoaderOptions: {
//   //   importLoaders: 1,
//   //   localIdentName: "[local]___[hash:base64:5]",
//   // }
// });


// next.config.js
const withSass = require('@zeit/next-sass')
module.exports = withSass(withCSS())