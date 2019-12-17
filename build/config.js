const { smart } = require('webpack-merge')
const { isProd } = require('./util')
const join = path => require('path').join(__dirname, '..', path)

module.exports = smart({
  entry: {
    main: join('web/src/main.tsx')
  },
  output: {
    path: join('dist'),
    filename: 'js/[name].[hash:6].js',
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.(j|t)sx?$/,
      loader: 'babel-loader'
    }]
  },
  resolve: {
    extensions: ['.js', '.ts', '.json', '.tsx', '.jsx'],
    alias: {
      '@': join('web/src')
    }
  }
}, isProd() ? {
  mode: 'production',
  output: {
    publicPath: ''
  },
  externals: {
    
  },
  optimization: {

  }
} : {
    module: {
      rules: [{
        test: /\.s(c|a)ss$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: true,
            sourceMap: true
          }
        }, 'sass-loader']
      }]
    },
    devtool: "source-map",
    plugins: [
      new (require('html-webpack-plugin'))({
        filename: 'index.html',
        template: join('web/index.ejs')
      })
    ],
    mode: 'development'
  })