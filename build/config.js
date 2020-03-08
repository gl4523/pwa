const { smart } = require('webpack-merge')
const { isProd } = require('./util')
const join = path => require('path').join(__dirname, '..', path)

module.exports = smart({
  entry: {
    main: join('web/src/main.tsx'),
    sw: join('web/src/worker/sw.ts')
  },
  output: {
    path: join('doc'),
    filename: 'js/[name].js',
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.(j|t)sx?$/,
      loader: 'babel-loader'
    }, {
      test: /\.(jpg|gif|png)$/,
      loader: {
        loader: 'url-loader',
        options: {
          limit: 2048,
          name: 'public/image/[path][name].[ext]'
        }
      }
    }, {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      loader: {
        loader: 'url-loader',
        options: {
          limit: 4096,
          name: 'public/icons/[path][name].[ext]'
        }
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.ts', '.json', '.tsx', '.jsx'],
    alias: {
      '@': join('web/src'),
      'assets': join('web/assets')
    }
  }
}, isProd() ? {
  mode: 'production',
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
    }, {
      test: /\.css$/,
      use: ['style-loader', {
        loader: 'css-loader',
        options: {
          sourceMap: true
        }
      }]
    }]
  },
  output: {
    publicPath: 'https://gl4523.github.io/pwa/'
  },
  externals: {

  },
  optimization: {

  },
  plugins: [
    new (require('html-webpack-plugin'))({
      filename: 'index.html',
      template: join('web/index.ejs'),
      chunks: ['main'],
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true
      },
    })
  ]
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
      }, {
        test: /\.css$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        }]
      }]
    },
    devtool: "source-map",
    plugins: [
      new (require('html-webpack-plugin'))({
        filename: 'index.html',
        template: join('web/index.ejs'),
        chunks: ['main']
      })
    ],
    mode: 'development'
  })