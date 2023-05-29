const modoDev = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const css_minimizer_webpack_plugin = require('css-minimizer-webpack-plugin');
const terser_webpack_plugin = require('terser-webpack-plugin');

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    devServer: {
        contentBase: "./public",
        port: 9000
      },
    optimization: {
        minimize: true,
        minimizer: [
            new terser_webpack_plugin(),
            new css_minimizer_webpack_plugin({})
        ],
    },
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                // 'style-loader', // Adicionar CSSS a DOM injetando a tag <style>
                'css-loader', /// interpereta @import, url()....
                'sass-loader'
            ]

        },  
        ]
    }
}