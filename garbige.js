{
    loader: 'postcss-loader',
        options: {
    postcssOptions: {
        plugins: function () {
            return [
                require('autoprefixer')
            ];
        }
    }
}
}