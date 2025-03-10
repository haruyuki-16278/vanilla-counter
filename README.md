# vanilla-counter

バニラ JS で実装するカウンター

## ディレクトリ構成

```txt
.
├── README.md //このドキュメント
├── index.html //SPAの起動ポイントになるHTML
├── main.mjs // ハッシュベースの自作ルーター
├── src //main.mjs以外のjsを保存するディレクトリ
│   ├── components //コンポーネント（ページを作成するためのパーツ）置き場
│   │   └── counter.mjs
│   ├── pages //ページ置き場
│   │   └── home.mjs
│   ├── register.mjs //各ページ・コンポーネントの登録を行うjs
│   └── route.mjs //各ハッシュに対してどのページを表示するのかを管理するjs
└── style.css
```
