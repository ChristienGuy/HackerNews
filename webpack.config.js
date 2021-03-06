/* eslint-disable */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  entry: {
    main: "./src/index.js"
  },
  output: {
    filename: "[name].js",
    chunkFilename: "[name].js",
    publicPath: "/"
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, "src/components"),
      Pages: path.resolve(__dirname, "src/pages"),
      Utils: path.resolve(__dirname, "src/utils"),
      Mocks: path.resolve(__dirname, "__mocks__")
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader"
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true,
              camelCase: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
    new CopyWebpackPlugin([
      {
        from: "./src/_redirects",
        to: "./"
      }
    ]),
    // new BundleAnalyzerPlugin()
  ],
  devServer: {
    historyApiFallback: true
  }
};
