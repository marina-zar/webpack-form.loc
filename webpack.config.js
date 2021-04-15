let path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const isProd = !isDev;
console.log("isDev:", isDev);


const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    };

    if (isProd) {
        config.minimizer = [
            new CssMinimizerWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }
    return config
};

const filename = ext => isDev ? `[name].${ext}` : `[name].[fullhash].${ext}`;

const cssLoaders = extra => {
    let loaders = [
        MiniCssExtractPlugin.loader,
        'css-loader',

    ];

    if (extra) {
        loaders.push(extra)
    }

    return loaders
};

let conf = {
    mode: "development",
    entry: {
        main: './src/index.js',
        analytics: './src/analyt.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: filename('js'),
        publicPath: ""
    },
    optimization: optimization(),
    devServer: {
        port: 4200,
        contentBase: path.resolve(__dirname, 'dist'),
        // hot: isDev,
        // overlay: {
        //     warnings: true,
        //     error: true,
        // },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader:'babel-loader',
                // exclude: '/node_modules/',
            },
            {
                test: /\.s[ac]ss$/i,
                use: cssLoaders('sass-loader'),
            },
            {
                test: /\.css$/i,
                use: cssLoaders(),
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|otf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.xml$/,
                use: ['xml-loader']
            },
            {
                test: /\.csv$/,
                use: ['csv-loader']
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: filename('css')
        }),
        new HTMLWebpackPlugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: isProd
            },
            cache: false,
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/favicon.ico'),
                    to: path.resolve(__dirname, 'dist')
                }
            ],
        }),
    ],
};

module.exports = (env, options) => {
    let isProd = options.mode === 'production';
    conf.devtool = isProd ? false : 'eval-cheap-module-source-map';
    conf.target = isProd ? 'browserslist' : 'web';
    return conf;
};

