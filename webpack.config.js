module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader:"babel-loader"
                }
            },
            {
                test: /\.css$/i,
                loaders: ['style-loader', 'css-loader']
            }
        ]
    }
}