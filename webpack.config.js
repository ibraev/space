const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: [
        path.resolve(__dirname, "src", "index.js"),
    ],
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "index.bundle.js",
        publicPath: "/"
    },
    devServer: {
        port: 9211,
        open: true,
        hot: true,
        static: {
            directory: path.join(__dirname, 'public')
        },
        compress: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(css)$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ],
    }
}