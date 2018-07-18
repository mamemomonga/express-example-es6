# express-example-es6

ES6によるexpressのサンプル

# 必要なもの

* node 8.1以上
* yarn

# 主要ライブラリ

名前           | 用途
---------------|-----------------
babel 6        | ES6のトランスパイル
express 4      | WAF
gulp 4         | ビルド
webpack 4      | JavaScriptの圧縮(babel+uglifyjs)
gulp-htmlmin   | HTML圧縮
gulp-sass      | sassトランスパイル(css圧縮)
fancy-log      | ログ表示

# セットアップ

	$ yarn -D

# ビルド

	$ yarn run gulp build

# 開発サーバ

ビルドを実行したとき、ファイル更新を検知してサーバを再起動させる

	$ yarn run gulp serve

# サーバ起動

ビルド済みのコードを起動する

	$ yarn run daemon

# 環境変数

NODE_ENV=development を設定すると、コードの圧縮が無効となる。

	$ export NODE_ENV=development

SERVE_PORT=8001 を設定すると、ポート8001でListenする

	$ SERVE_PORT=8001 yarn run daemon

# License

MIT

except [\_reset.scss](src/client/sass/_reset.scss) (public domain)


