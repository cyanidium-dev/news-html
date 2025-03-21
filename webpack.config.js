const path = require("path"); // Додано імпорт модуля path
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const fs = require("fs");

const pagesDir = path.resolve(__dirname, "src/pages");
const pages = fs.existsSync(pagesDir)
  ? fs.readdirSync(pagesDir).filter((file) => file.endsWith(".html"))
  : [];

module.exports = {
  mode: "development",
  entry: "./src/js/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "icons/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[contenthash].css" }),
    new CopyWebpackPlugin({
      patterns: [{ from: "src/static", to: "static" }],
    }),
    ...pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          filename: page,
          template: `./src/pages/${page}`,
        })
    ),
  ],
  devServer: {
    static: path.resolve(__dirname, "dist"),
    hot: true,
    open: true,
    historyApiFallback: true,
  },
};
