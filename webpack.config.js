const path = require("path");

module.exports = {
  entry: "./src/js/index.js", // Вказуємо вхідний файл
  output: {
    path: path.resolve(__dirname, "dist"), // Вказуємо шлях для збірки
    filename: "bundle.js", // Вказуємо назву зібраного файлу
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Вказуємо, які файли потрібно обробляти
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Використовуємо Babel для трансляції ES6+ у старішу версію JavaScript
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/, // Обробка файлів CSS
        use: ["style-loader", "css-loader"], // Використання style-loader для включення стилів у HTML та css-loader для обробки CSS
      },
      {
        test: /\.(png|svg|jpg|gif)$/, // Обробка зображень
        use: ["file-loader"], // Використання file-loader для завантаження файлів
      },
    ],
  },
};
