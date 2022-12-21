# Abstract_Factory
## 概要
抽象的な部品を組み合わせで抽象的な製品を作る実装パターン。
部品の具体的な実装には注目せず、インターフェースに注目する。そのインターフェースだけを使って部品を組み立て、製品を構成する。
## 実装の詳細
| 名前            | 説明                                               |
| --------------- | -------------------------------------------------- |
| Item            |  部品クラス(TrayとLink)の親クラス                                                |
| AbstractFactory | 生成の抽象クラス                                   |
| Tray            | LinkやTrayを内包するパーツを作成する抽象クラス     |
| Link            | urlからリンクを作成する抽象クラス                  |
| Page            | LinkやTrayを組み合わせてページを生成する抽象クラス |
| ListFactory     | Listを用いた生成の具象クラス                       |
| ListTray        | Listを用いてTrayクラスの機能を実装する具象クラス   |
| ListLink        | Listを用いてLinkクラスの機能を実装する具象クラス   |
| ListPage        | Listを用いてPageクラスの機能を実装する具象クラス   |
## 実装するメリットとデメリット
### メリット
* 部品の具体的な実装と製品の構造を分離できる
* クライアントは実際のクラスの実装を把握する必要がない(=具象プロダクトとクライアントコードの密結合を防ぐ)
* プロダクト作成コードが一箇所にまとめられる(=単一責任の原則)
* 新しい具象Factory,productを追加しても既存のproductが影響を受けない(開放閉鎖の原則)
### デメリット
* 実装の際に多数の新規インターフェースとクラスが導入され、コードが複雑になる恐れがある。
## 実装したコードへのリンク
<!-- * [c++](https://github.com/sakana7392/Design_Patterns/Abstract_Factory/c++) -->
* [TypeScript](https://github.com/sakana7392/Design_Patterns/Abstract_Factory/TypeScript)
<!-- * [Go](https://github.com/sakana7392/Design_Patterns/Abstract_Factory/Go) -->