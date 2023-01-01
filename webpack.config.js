const webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.html$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                }
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css', '.scss', '.sass'],
    },
    plugins: [
        new webpack.DefinePlugin({
            __API__: process.env.API_KEY_TMDB,
        })
    ]
};
