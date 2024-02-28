const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer'); 

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry: {
        popup: path.resolve('./src/popup/index.tsx'),
        options: path.resolve('./src/options/options.tsx'),
        background: path.resolve('./src/background/background.ts'),
        contentScript: path.resolve('./src/contentScript/index.tsx')
    },
    module: {
        rules: [
            {
                use: 'ts-loader',
                test: /\.tsx$/,
                exclude: /node_modules/
            },
            {
                use: ['style-loader', 'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            ident: 'postcss',
                            plugins: [tailwindcss, autoprefixer]
                        },
                    }
                }],
                test: /\.css$/i,
            },
            {
                type: 'assets/resource',
                use: 'asset/resource',
                test: /\.(png|jpeg|gif|svg|eot|ttf|woff|woff2)$/,
            },
        ]
    },
    plugins: [
        new CopyPlugin({
          patterns: [
            { 
                from: path.resolve('src/static'),
                to: path.resolve('dist')
            },
          ],
        }),
        ...getHtmlPlugins([
            'popup', 'options', 'newTab'
        ])
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx']
    },
    output: {
        filename: '[name].js'
    },
    optimization: {
        splitChunks: {
            chunks(chunk) {
                return chunk.name !== 'contentScript';
            },
        },
    }
}

function getHtmlPlugins(chunks) {
    return chunks.map(chunk => new HtmlPlugin({
        title: 'Select and Translate',
        filename: `${chunk}.html`,
        chunks: [chunk]
    }))
}