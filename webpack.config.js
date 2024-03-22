const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js", // Вказуємо вхідний файл
  output: {
    path: path.resolve(__dirname, "dist"), // Вказуємо шлях для збірки
    filename: "[name].[contenthash].js", // Вказуємо назву зібраного файлу
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i, // Вказуємо, які файли потрібно обробляти
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      // {
      //   test: /\.css$/, // Обробка файлів CSS
      //   use: ["style-loader", "css-loader"], // Використання style-loader для включення стилів у HTML та css-loader для обробки CSS
      // },
      // {
      //   test: /\.(png|svg|jpg|gif)$/, // Обробка зображень
      //   use: ["file-loader"], // Використання file-loader для завантаження файлів
      // },
    ],
  },
};
