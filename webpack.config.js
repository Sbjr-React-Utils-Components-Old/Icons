const path = require('path');

module.exports = {
  entry: './src',
  mode: 'production',
  plugins: [],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(less|css)$/,
        loaders: [
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'url-loader',
          options: {},
        }],
      },
    ],
  },
  externals: {
    react: 'commonjs react',
  },
  output: {
    libraryTarget: 'commonjs2',
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
