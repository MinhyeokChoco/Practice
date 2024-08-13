const path = require('path');

module.exports = {
    mode: "production",
    entry: "./source/index.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "index_bundle.js"
    }
}

// npx webpack --entry ./source/index.js --output-path ./public/index_bundle.js = 명령어 사용
// npx webpack --config webpack.config.js = webpack.config.js 작성 후 사용, 결과는 위와 동일