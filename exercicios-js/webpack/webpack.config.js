const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [{
            teste: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
               // 'style-loader',//adiciona css a dom injetando a 
                'css-loader' //interpreta o @importa
            ]
        }]
    }
}