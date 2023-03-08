const path = require("path");
const HTMLWebpackPlugin = require('html-webpack-plugin');


module.exports = {
 
    // Starting point of the application. (can be index.js)
    entry: './src/index.jsx',

    //Production build location (can be /dist)
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundle.js',
        publicPath: '/'
    },

    devServer: {
        historyApiFallback: true
    },

    performance: {
        hints: false,
    },

    plugins: [
        // Provide html file (for the build)
        new HTMLWebpackPlugin({
            template: ('./public/index.html')
        }),
    ],

    module: {
        rules: [
            // Allows babel transpilation to be used on js, jsx files
            {
                test: /\.(jsx|js)?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env', 
                            ['@babel/preset-react', {"runtime": "automatic"}]
                        ]
                    }

                }
            },

            // Allows compilation of CSS files  
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },

            //Allows images import
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    },

    // Avoid specifying extensions when importing modules (only specified extensions here)
    resolve: {
        extensions: ['.js', '.jsx', '.jpeg', '.jpg', '.png', '.gif']
    },
}