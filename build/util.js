exports.isProd = function() {
  return Object.is(process.env.NODE_ENV, 'production')
}