const path = require('path');

module.exports = {
    watch: true,
    entry: './js/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve('output')
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            { 
                test: /\.svg$/, 
                loader: 'file-loader' 
            }
        ],
        rules: [
            {
                test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: './files/'
                    }
                }
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: './files/'
                    }
                }
            },{
                test: /\.css$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }]
            }
        ]
    }
}