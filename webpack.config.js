// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output file
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Files to process
        exclude: /node_modules/,
        use: 'babel-loader', // Use Babel loader
      },
      {
        test: /\.css$/, // For CSS files
        use: ['style-loader', 'css-loader'], // Loaders for CSS
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // File extensions to handle
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // HTML template
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'), // Serve from 'dist' directory
    port: 3000,
    hot: true,
  },
};