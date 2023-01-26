const path = require("path");
const HTMLWebpackPlugin = require('html-webpack-plugin');


module.exports = {
 
    // Starting point of the application. (can be index.js)
    entry: './src/index.jsx',

    //Production build location (can be /dist)
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundle.js'
    },

    plugins: [
        // Provide html file (for the build)
        new HTMLWebpackPlugin({
            template: ('./public/index.html')
        })
    ],

    module: {
        // Allows babel transpilation to be used on js, jsx, tsx or ts files except those contained in node_modules
        rules: [
            {
                test: /\.(tsx|jsx|ts|js)?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env', 
                            ['@babel/preset-react', {"runtime": "automatic"}]
                        ]
                    }

                }
            }
        ]
    },

    // Avoid specifying extensions when importing modules (only specified extensions here)
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.jpeg', '.png', '.gif']
    },
}