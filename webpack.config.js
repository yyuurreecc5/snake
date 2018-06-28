const path = require('path');

module.exports = {
    mode: 'development',
    watch: true,
    entry: './js/index.ts',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, './'),
        compress: true,
        port: 9000,
        inline: true,
        hot: true
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'output')
    },
    module: {
        rules: [
            {
              test: /\.tsx?$/,
              use: 'ts-loader',
              exclude: /node_modules/
            },
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
            },
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }]
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    }
}