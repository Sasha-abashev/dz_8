const path = require("path");

module.exports = {
  entry: "./src/index.js", // путь к главному JS-файлу
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // очищает папку dist при каждой сборке
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.hbs$/,
        loader: "handlebars-loader",
      },
    ],
  },
  devServer: {
    static: "./dist",
    port: 8080,
    open: true,
  },
  resolve: {
    extensions: [".js"],
  },
  mode: "development",
};
