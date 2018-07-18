const path = require('path');


module.exports = {
    mode: 'development', 
    output: {
        filename: 'my-first-webpack.bundle.js',
        path: path.resolve(__dirname, 'dist')
      },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
              { loader: 'babel-loader'},
              {
                loader:'style-loader'},
              { loader: 'css-loader',
            options: {
                modules: true
             }
            }
        ]
    }
]
}
}

