const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
  entry: {
    index: "./src/ts/index.ts",
    med_signup: "./src/ts/medic/med_signup.ts",
    patient_signup: "./src/ts/pacient/patient_signup.ts",
    med_main: "./src/ts/medic/med_main.ts",
    patient_main: "./src/ts/pacient/patient_main.ts",
  },
  mode: "development",
  devServer: {
    watchFiles: ["src/**/*"],
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(jpg|png|jpeg|svg|gif)$/,
        type: "asset/resource",
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // Also generate a test.html
      filename: "index.html",
      template: "src/html/index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      // Also generate a test.html
      filename: "med_signup.html",
      template: "src/html/med_signup.html",
      chunks: ["med_signup"],
    }),
    new HtmlWebpackPlugin({
      // Also generate a test.html
      filename: "patient_signup.html",
      template: "src/html/patient_signup.html",
      chunks: ["patient_signup"],
    }),
    new HtmlWebpackPlugin({
      // Also generate a test.html
      filename: "med_main.html",
      template: "src/html/med_main.html",
      chunks: ["med_main"],
    }),
    new HtmlWebpackPlugin({
      // Also generate a test.html
      filename: "patient_main.html",
      template: "src/html/patient_main.html",
      chunks: ["patient_main"],
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
