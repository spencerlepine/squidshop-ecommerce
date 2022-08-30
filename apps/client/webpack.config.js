const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'production',
  devServer: {
    port: 3000,
    historyApiFallback: true
  },
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[chunkhash].bundle.js',
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /node_modules\/(?!antd\/).*/,
          name: 'vendors',
          chunks: 'all',
        },
        // This can be your own design library.
        antd: {
          test: /node_modules\/(antd\/).*/,
          name: 'antd',
          chunks: 'all',
        },
      },
    },
    runtimeChunk: {
      name: 'manifest',
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|jpeg|gif)$/i,
        type: 'asset',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        type: 'javascript/auto',
        test: /\.json$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      }
    ],
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [path.join(__dirname, './src'), path.join(__dirname, './node_modules')]
  },
  plugins: [
    new CompressionPlugin({
      test: /\.js(\?.*)?$/i,
    }),

    new CopyWebpackPlugin({
      patterns: [{
        from: 'public',
        globOptions: {
          ignore: [
            '**/index.html'
          ]
        }
      }]
    }),

    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      filename: './index.html',
      title: 'SquidShop Ecommerce',
      meta: {
        viewport: 'width=device-width, initial-scale=1,viewport-fit=cover, shrink-to-fit=no',
        'theme-color': '#42b029',
        'apple-mobile-web-app-status-bar-style': '#42b029',
        'og:title': 'SquidShop',
        'og:description': 'Ocean-themed ecommerce React/TypeScript web app connected to microservice architecture Node.js backend. Dockerized and automated with continuous integration using GitHub Actions.',
        'content-type': { 'http-equiv': 'content-type', content: 'text/html; charset=UTF-8' },
      },
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),

    new Dotenv()
  ]
};