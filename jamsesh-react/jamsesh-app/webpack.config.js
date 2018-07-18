const path = require('path');


module.exports = {
    mode: 'development', 
    plugins: [new ExtractTextPlugin('./bundle.css')],
    output: {
        filename: 'my-first-webpack.bundle.js',
        path: path.resolve(__dirname, 'dist')
      },
    module: {
      rules: [
        {
          test: /\.css$/,
            exclude: [/\.global\./, /node_modules/],
             loader: ExtractTextPlugin.extract(
              {
                fallback: 'style-loader',
                use:[
                  {
                    loader: 'css-loader',
                    options: {
                      importLoaders: 1,
                      modules: true,
                      autoprefixer: true,
                      minimize: true,
                      localIdentName: '[name]__[local]___[hash:base64:5]'
                  }
                },
                  { loader: 'babel-loader'},
                    {
                      loader:'style-loader'},
                    { loader: 'css-loader',
                  options: {
                      modules: true
                   },
                  }  
                ]
              })
            }
          ]
        }
      }