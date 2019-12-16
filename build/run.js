const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')
const config = require('./config')
const {DEV_PORT} = require('./const')

const compiler = webpack(config)

const server = new webpackDevServer(compiler, {
  open: true,
  inline: true,
  hot: true,
  publicPath: config.output.publicPath,
  before(app, server) {
    // TODO
  }
})

!(async () => {
  await require('util').promisify(server.listen).call(server, DEV_PORT)
  console.log(`server open on port ${DEV_PORT}`)
})()