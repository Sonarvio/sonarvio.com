/**
 * Build
 * =====
 *
 *
 */

var path = require('path')

var merge = require('deep-merge')(function (target, source, key) {
  if (target instanceof Array) {
    return [].concat(target, source)
  }
  return source
})

var webpack = require('webpack')
var express = require('express')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')

var CleanPlugin = require('clean-webpack-plugin')
var HTMLWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var typographic = require('typographic')
var rupture = require('rupture')

var autoprefixer = require('autoprefixer')
var pxtorem = require('postcss-pxtorem')
var lost = require('lost')
var rucksack = require('rucksack-css')

// environment (default mode: development)
var env = {
  SOURCE: path.resolve(__dirname, 'src'),
  STATIC: path.resolve(__dirname, 'src/static'),
  PUBLIC: path.resolve(__dirname, 'public'),
  isProduction: (process.env.NODE_ENV === 'production') || process.argv.length > 2,
  PORT: 10000
}


var config = {
  target: 'web',
  entry: [
    path.resolve(env.SOURCE, './main.js')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: env.PUBLIC,
    filename: 'app.js'
  },
  plugins: [
    // shared -> static route endpoints: https://github.com/ampedandwired/html-webpack-plugin
    // - create endpoints with and without extension !
    'index',
    'lyrics',
    'media',
    'file',
    'website',
    'record'
  ].reduce(function (plugins, name) {
    var HTMLReferences = {
      template: env.STATIC + '/index.html',
      favicon: env.STATIC + '/favicon.png'
    }
    var variations = [
      name,
      name + '.html' // should be rundant in production !
    ]
    variations.forEach(function (dest) {
      plugins.push(
        new HTMLWebpackPlugin({
          filename: dest,
          template: HTMLReferences.template,
          favicon: HTMLReferences.favicon,
          minify: {
            removeComments: true,
            collapseWhitespace: true
          }
        })
      )
    })
    return plugins
  }, [
    // env.PUBLIC.replace(__dirname, '').substr(1) || remove previous version
    new CleanPlugin([ 'public' ], __dirname)
  ]),
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel',
        query: {
          optional: ['runtime'],
          stage: 0,
          env: {

            development: !env.isProduction ? {
              plugins: ['react-transform'],
              extra: {
                'react-transform': {
                  transforms: [
                    {
                      transform: 'react-transform-hmr',
                      imports: ['react'],
                      locals: ['module']
                    },
                    {
                      transform: 'react-transform-catch-errors',
                      imports: ['react', 'redbox-react']
                    }
                    // {
                    //   target: 'react-transform-render-visualizer'
                    // }
                  ]
                }
              }
            } : null

          }
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        loaders: [
          // 'file?hash=sha512&digest=hex&name=[hash].[ext]',
          // 'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
          'url?limit=10240' // hash, inlining
        ]
      }
      // optional:
      // - react router proxy loader
      // https://github.com/odysseyscience/react-router-proxy-loader
    ]
  },
  stylus: {
    // use: [typographic(), rupture()],
    use: [typographic(), rupture()],
    // TODO:
    // - check why error with 'rupture'
    import: ['typographic'],
    errors: true
  },
  postcss: function(){
    return [
      lost({/** https://github.com/corysimmons/lost#global-grid-settings **/
        flexbox: 'flex'
      }),
      rucksack({/** https://github.com/simplaio/rucksack#options **/}),
      pxtorem({/** https://github.com/cuth/postcss-pxtorem#options **/}),
      autoprefixer({/** https://github.com/postcss/autoprefixer-core#usage **/
        // browsers: ['last 2 versions']
      })
    ]
  }
}

// development: build + watch | virtual
if (!env.isProduction) {
  config = merge(config, {
    devtool: 'eval',
    entry: [
      'webpack-hot-middleware/client'
    ],
    output: {
      publicPath: '/' // virtual
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(), //{/** quiet: true **/}
      new webpack.NoErrorsPlugin()
    ],
    module: {
      loaders: [
        {
          test: /\.styl$/,
          loader: 'style!css!postcss!stylus'
          // loader: 'style!css?module&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!stylus'
        }
      ]
    }
  })

  var app = express()
  var compiler = webpack(config)

  // virtual embed !
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }))

  app.use(webpackHotMiddleware(compiler))

  app.get('*', function (req, res) {
    var pathname = req.path
    console.log(env.PUBLIC + pathname); // if exists ->
    if (pathname === '/') {
      pathname = '/index.html'
    }

    // mime type
    // type = mime.lookup(path);

    //<SNIP>....

    // header fields
    // if (!res.getHeader('content-type')) {
    //   var charset = mime.charsets.lookup(type);
    //   res.setHeader('Content-Type', type + (charset ? '; charset=' + charset : ''));
    // }
    // res.setHeader('Content-Type', 'text/html')
    // res.send(env.PUBLIC + pathname)

    console.log(
      env.PUBLIC + pathname, {
        headers: {
          'Content-Type': 'text/html'
        }
      }

    );

    res.set('Content-Type', 'text/html');
    res.sendFile(env.PUBLIC + pathname, {
      headers: {
        'Content-Type': 'text/html'
      }
    })
    // headers	Object containing HTTP headers to serve with the file.
    // server
    // res.sendFile(env.PUBLIC + pathname)
  })

  return app.listen(env.PORT, 'localhost', function (err) {
    if (err) {
      return console.error(err)
    }
    console.log(new Date().toISOString(), '- [sonarvio.com] http://localhost:' + env.PORT)
  })
}

// production: 'release'
webpack(merge(config, {
  devtool: 'source-map',
  plugins: [
    new ExtractTextPlugin('styles.css', { allChunks: true }),
    // new ExtractTextPlugin('[name]-[chunkhash].css', { allChunks: true }),
    new webpack.PrefetchPlugin('react'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      // sourceMap: false,
      compress: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css!postcss!stylus')
        // loader: ExtractTextPlugin.extract('style-loader', 'css-loader?module&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!stylus-loader')
      }
    ]
  },
  stylus: {
    compress: true
  }
})).run(notify)


function notify (error, stats) {
  if (error) {
    return console.error(error)
  }
  console.log(new Date().toISOString(), ' - [sonarvio.com]', stats.toString())
}
