# Bridge
## 概要
機能と実装を分離するためのBridgeパターン。
色と形がそれぞれ$x,y$種類存在する場合、サブクラスは$x×y$種類必要になる。そこで、継承ではなくオブジェクトの合成に切り替えること(=色または形のいずれかを別のクラスに抽出すること)によって、サブクラスの数が増えすぎるのを防ぐ。
## パターンにおける役割

| 機能or実装 | 役割名            | 説明                     |
| ---------- | ----------------- | ------------------------ |
| 機能       | Abstraction       | 機能の抽象的な定義       |
| 機能       | RefinedAbstraction| 機能の拡張したクラス |
| 実装       | Impliment         | 実装の抽象的な定義       |
| 実装       | ConcreteImpliment | 実装の具体的な処理の実装 |

## 実装の詳細
[TypeScript](https://github.com/sakana7392/Design_Patterns/tree/main/Bridge/TypeScript)
| 機能or実装 | 役割名            | 説明                     |
| ---------- | ----------------- | ------------------------ |
| 機能       | Display       | 表示機能の抽象的な定義       |
| 機能       | countDisplay| 表示機能を拡張したクラス |
| 実装       | DisplayImpliment         | 表示機能の実装を定義する抽象クラス     |
| 実装       | ConcreteImpliment | 表示の具体的な処理の実装 |

## 実装するメリットとデメリット
### メリット
* 直行するクラス同士であれば分離することでサブクラスの数を抑えることができる。
* 機能と実装を分離することで変更・拡張しやすくなる。
* 抽象化層は高レベルのロジック、実装層はプラットフォームの詳細に集中できる。
### デメリット
* 密結合なクラスに対してBridgeパターンを適用すると余計にコードが複雑になる可能性がある。
## 実装したコードへのリンク
* [TypeScript](https://github.com/sakana7392/Design_Patterns/tree/main/Bridge/TypeScript)
* [Go](https://github.com/sakana7392/Design_Patterns/tree/main/Bridge/Go)