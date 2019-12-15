const path = require("path");
const distDir = path.resolve(__dirname, "./dist");

module.exports = {
  entry: "./src/app.ts",
  output: {
    filename: "boundle.js",
    path: distDir
  },
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  watch: true
};
