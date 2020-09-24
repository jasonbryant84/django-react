module.exports = {
    context: __dirname,
    entry: './src/index.js',
    // devServer: {
    //     hot: true
    // },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                        loader: "babel-loader"
                    }
                ]
            }
        ]
    },
    output: {
        filename: 'main.js', 
        path: __dirname + '/static/frontend' 
    }
}