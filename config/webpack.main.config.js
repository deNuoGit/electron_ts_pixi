const { mainPath, distPath, isDev } = require ('./env');


module.exports = {
    // node.js で動作することを指定する
    target: 'electron-main',
    // 起点となるファイル
    entry: {
        main: mainPath
    },
    // webpack watch したときに差分ビルドができる
    cache: true,
    // development は、 source map file を作成、再ビルド時間の短縮などの設定となる
    // production は、コードの圧縮やモジュールの最適化が行われる設定となる
    mode: 'development', // "production" | "development" | "none"
    // ソースマップのタイプ
    devtool: 'source-map',
    // 出力先設定 __dirname は node でのカレントディレクトリのパスが格納される変数
    output: {
        path: distPath,
        filename: '[name].js',
        publicPath: '/',
        // devetoolModuleFilenameTemplate: "file:///[absolute-resource-path]"
    },
    node: {
        __dirname: false
    },
    devtool: isDev && 'inline-source-map',
    // ファイルタイプ毎の処理を記述する
    module: {
        rules: [{
            // 正規表現で指定する
            // 拡張子 .ts または .tsx の場合
            test: /\.tsx?$/,
            // ローダーの指定
            // TypeScript をコンパイルする
            use: 'ts-loader'
        }, {
            // 拡張子 .ts または .tsx の場合
            test: /\.tsx?$/,
            // 事前処理
            enforce: 'pre',
            // TypeScript をコードチェックする
            loader: 'tslint-loader',
            // 定義ファイル
            options: {
                configFile: './tslint.json',
                // airbnb というJavaScriptスタイルガイドに従うには下記が必要
                typeCheck: true,
            },
        }],
    },
   // 処理対象のファイルを記載する
    resolve: {
        extensions: [
            '.ts',
            '.tsx',
            '.js', // node_modulesのライブラリ読み込みに必要
        ]
    },
};