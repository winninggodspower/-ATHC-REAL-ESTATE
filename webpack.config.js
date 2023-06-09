const path = require("path");

const homeJsPath = path.resolve(__dirname, "home", "static", "js");
const homeJsFile = {
    boxContainer : path.resolve(homeJsPath, "boxContainer.js"),
    navBarToggler : path.resolve(homeJsPath, "navBarToggler.js"),
    newsletter : path.resolve(homeJsPath, "newsletter.js"),
    landLayoutPopup: path.resolve(homeJsPath, "landLayoutPopup.js"),
    testimonialSlider: path.resolve(homeJsPath, "testimonialSlider.js"),
    buildingSlider: path.resolve(homeJsPath, "buildingSlider.js"),
    animation: path.resolve(homeJsPath, "animation.js"),
}

module.exports = {
  mode: "production",
  watch: true,
  entry: {
    ...homeJsFile
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, "home", "static", "js_bundle"),
  },
  module: {
    rules: [
      // ...
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
