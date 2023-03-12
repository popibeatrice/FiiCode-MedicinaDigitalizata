const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
module.exports = {
  entry: {
    index: "./src/ts/index.ts",
    med_signup: "./src/ts/medic/med_signup.ts",
    patient_signup: "./src/ts/pacient/patient_signup.ts",
    med_main: "./src/ts/medic/med_main.js",
    patient_main: "./src/ts/pacient/patient_main.ts",
    med_patientpg: "./src/ts/medic/med_patientpg.ts",
    med_profil: "./src/ts/medic/med_profil.ts",
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
        test: /\.(jpg|png|jpeg|svg|gif|pdf)$/,
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
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      // Also generate a test.html
      filename: "index.html",
      template: "src/html/index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      // Also generate a test.html
      filename: "med_signup.html",
      template: "src/html/medic/med_signup.html",
      chunks: ["med_signup"],
    }),
    new HtmlWebpackPlugin({
      // Also generate a test.html
      filename: "patient_signup.html",
      template: "src/html/pacient/patient_signup.html",
      chunks: ["patient_signup"],
    }),
    new HtmlWebpackPlugin({
      // Also generate a test.html
      filename: "med_main.html",
      template: "src/html/medic/med_main.html",
      chunks: ["med_main"],
    }),
    new HtmlWebpackPlugin({
      // Also generate a test.html
      filename: "patient_main.html",
      template: "src/html/pacient/patient_main.html",
      chunks: ["patient_main"],
    }),
    new HtmlWebpackPlugin({
      // Also generate a test.html
      filename: "med_patientpg.html",
      template: "src/html/medic/med_patientpg.html",
      chunks: ["med_patientpg"],
    }),
    new HtmlWebpackPlugin({
      // Also generate a test.html
      filename: "med_profil.html",
      template: "src/html/medic/med_profil.html",
      chunks: ["med_profil"],
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
