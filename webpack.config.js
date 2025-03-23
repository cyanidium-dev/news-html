const path = require('path'); // Додано імпорт модуля path
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const fs = require('fs');

const pagesDir = path.resolve(__dirname, 'src/pages');
const pages = fs.existsSync(pagesDir)
  ? fs.readdirSync(pagesDir).filter(file => file.endsWith('.html'))
  : [];

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|webp|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/images/[name][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/fonts/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[contenthash].css' }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/static', to: 'static' },
        { from: 'src/components', to: 'components' },
      ],
    }),
    ...pages.map(
      page =>
        new HtmlWebpackPlugin({
          filename: page,
          template: `./src/pages/${page}`,
          inject: 'body',
          scriptLoading: 'defer',
        })
    ),
  ],
  devServer: {
    static: path.resolve(__dirname, 'public'),
    hot: true,
    open: true,
    historyApiFallback: true,
  },
};
