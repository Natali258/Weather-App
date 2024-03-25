const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devServer: {
    port: 3000,
    open: true,
  },
  entry: "./src/js/index.js", // Вказуємо вхідний файл
  output: {
    path: path.resolve(__dirname, "dist"), // Вказуємо шлях для збірки
    filename: "[name].[contenthash].js", // Вказуємо назву зібраного файлу
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
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
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("postcss-preset-env")],
              },
            },
          },
        ],
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /(node_modules | bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
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
