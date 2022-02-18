const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    port: 9000,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // index.html 템플릿을 기반으로 빌드 결과물을 추가해줌
      template: "./src/index.html",
    }),
  ],
  // devtool: "#eval-source-map",
};

// {
//   test: /\.png$/, // .png 확장자로 마치는 모든 파일
//   loader: "file-loader",
//   options: {
//     publicPath: "./dist/", // prefix를 아웃풋 경로로 지정
//     name: "[name].[ext]?[hash]", // 파일명 형식
//   },
// },
// {
//   test: /\.png$/,
//   use: {
//     loader: "url-loader", // url 로더를 설정한다
//     options: {
//       publicPath: "./dist/", // file-loader와 동일
//       name: "[name].[ext]?[hash]", // file-loader와 동일
//       limit: 5000, // 5kb 미만 파일만 data url로 처리
//     },
//   },
// },
