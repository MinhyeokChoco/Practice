const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        index: "./source/index.js",
        about: "./source/about.js"
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "[name]_bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './source/index.html',
            filename: './index.html',
            chunks: ['index']
        }),

        new HtmlWebpackPlugin({
            template: './source/about.html',
            filename: './about.html',
            chunks: ['about']
        })
    ]
}

// npx webpack --entry ./source/index.js --output-path ./public/index_bundle.js = 명령어 사용
// npx webpack --config webpack.config.js = webpack.config.js 작성 후 사용, 결과는 위와 동일

// rm./public/*.*; = 퍼블릭 폴더 안에 있는 모든 파일 삭제 명령어