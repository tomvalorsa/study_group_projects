var webpack = require('webpack')
var path = require('path')
module.exports = {
  entry:{
    index: './src/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].js",
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: /(node_modules|bower_components)/,
        loader: "style-loader!css-loader?module&importLoaders=1&localIdentName=[path][name]_[local]_[hash:base64:5]!postcss"
      },
      {
        test: /\.css$/,
        include: /(node_modules|bower_components)/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel?optional[]=runtime&stage=0'
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg|png|json)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src', 'src/components'],
    extensions: ["", ".webpack.js", ".web.js", ".js", ".coffee"],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"development"'
      }
    })
  ],
  postcss: [
    require('postcss-nested')
  ]
}