# レポジトリ内容

この課題は、Web白熱教室のRedux入門の課題その1「[【エクササイズ】ReduxでTodo管理できるツールを作る](https://tsuyopon.xyz/learning-contents/web-dev/javascript/react/js-exercise-for-redux-1/)」の課題レポジトリになります。

この課題では、HTMLやJSXなど見た目の実装は行わず、全ての動作をターミナルとテストを使って確認するものとなっております。

## 課題

- `__tests__/App.spec.js` のテストが通るように、「Reducers」「Actions」「Store」を実装する
- answerブランチでサンプルコード(解答コード)を用意しているが、あくまでもサンプルコードという立ち位置で、サンプルコードと全く同じ構成・実装である必要は無い

### 課題をクリアするためのステップ(実装のヒント)

- [ ] 必要なライブラリをインストールする
    - redux
    - jest
    - babel関連
- [ ] Redux関連の実装
    - [ ] 実装済みの `App.js`, `App.spec.js` の内容を参考に、必要なActions, Reducers, Storeを実装する
    - [ ] Actions, Reducers, Storeのテストコードも作成する
- [ ] Redux以外の実装
    - [ ] `models/Todo.js` の実装とテストコードの作成を行う
        - `models/Todo.js` は `todoReducer` とテストで使われる
- [ ] プロジェクトのルートディレクトリに次のディレクトリを作成する
    - actionsディレクトリ
        - このディレクトリの中にActions系のファイルを作成する
    - reducersディレクトリ
        - このディレクトリの中にReducers系のファイルを作成する
        - 今回は2つのReducerを作ることになるが、[combineReducers](https://redux.js.org/api/combinereducers)を使って1つにまとめる
    - storeディレクトリ
        - index.jsファイルを作成する。
            - [combineReducers](https://redux.js.org/api/combinereducers)を使って1つにまとめたreducerを[createStore](https://redux.js.org/api/createstore)の引数に渡してstoreを作成する
            - 作成したstoreを外部ファイルから読み込めるようにする
    - modelsディレクトリ
        - このディレクトリの中にTodo.jsを作成する
            - Todo.jsの中身はTodoクラスの実装ファイルで、次の機能を持つ
                - constructor
                    - 引数に文字列1つ受け取る
                    - 次の２つのプロパティを持つ
                        - `this._text`
                            - 引数から受け取った文字列をそのまま代入する
                        - `this._completed`
                            - デフォルト値として `false` をセットする
                - ゲッター
                    - `get text`
                        - `this._text` を返す
                        - [ゲッター](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions/get)
                - インスタンスメソッド
                    - `hasCompleted`
                        - `this._completed` を返す
                    - `toggle` メソッド
                        - `this._completed` の真偽値を反転する

## 実装→レビュー依頼の流れ

1. このレポジトリをフォークして、フォークした自分のレポジトリを `git clone` してパソコンにダウンロードする
1. masterブランチからdevelopブランチを切る
1. 1つの機能を実装する毎に、developブランチからfeatureブランチを切って作業をすすめる
    - [git flow](https://qiita.com/KosukeSone/items/514dd24828b485c69a05) で開発をすすめること

## 参考記事

課題をこなしていて、行き詰まったら以下の資料を参考にしていただければ解答にたどり着けるかと思います。

- Web白熱教室
    - [Reduxとは【ReactとReduxの役割の比較】](https://tsuyopon.xyz/learning-contents/web-dev/javascript/react/what-is-the-redux/)
    - [ReduxとReactのデータの流れを図を使って理解する](https://tsuyopon.xyz/learning-contents/web-dev/javascript/react/understand-data-flow-of-redux-and-react/)
    - [【Redux】Actionsとは](https://tsuyopon.xyz/learning-contents/web-dev/javascript/react/what-is-the-actions-in-redux/)
    - [【Redux】Actionsのテストの書き方を覚える](https://tsuyopon.xyz/learning-contents/web-dev/javascript/react/how-to-write-tests-for-actioins-in-redux/)
    - [【Redux】Reducersとは](https://tsuyopon.xyz/learning-contents/web-dev/javascript/react/what-is-the-reducers-in-redux/)
    - [【Redux】Reducersのテストの書き方を覚える](https://tsuyopon.xyz/learning-contents/web-dev/javascript/react/how-to-write-tests-for-reducers-in-redux/)
    - [【Redux】Storeとは(ActionとReducerの連携含む)](https://tsuyopon.xyz/learning-contents/web-dev/javascript/react/what-is-the-store-in-redux/)
    - [【Redux】Storeのテストの書き方を覚える](https://tsuyopon.xyz/learning-contents/web-dev/javascript/react/how-to-write-tests-for-store-in-redux/)
- Jest
    - [Getting Started](https://jestjs.io/docs/ja/getting-started)
        - Babelの設定など
            - import, exportをテスト実行時にも有効にするために必要
    - [expect](https://jestjs.io/docs/ja/expect)
        - アサーションメソッド
- Redux
    - [API Reference](https://redux.js.org/api/api-reference)
        - [createStore](https://redux.js.org/api/createstore)
        - [combineReducers](https://redux.js.org/api/combinereducers)
        - [getState](https://redux.js.org/api/store#getstate)
        - [dispatch](https://redux.js.org/api/store#dispatchaction)
    - [GitHub](https://github.com/reduxjs/redux)