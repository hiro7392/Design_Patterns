# Builder パターン

## 概要
構造を持ったインスタンスを組み上げていく実装方法。

##  実装の詳細
java本の実装を模倣
| 名前 | 説明 |
| ---- | ---- |
| Builder|  文書を構成するメソッドを定めた抽象クラス    |
| Director |   1つの文書を作るクラス   |
| HTMLBuilder | HTMLファイルを使って文書を作る具象クラス1     |
| TextBuilder | テキストを使って文書を作る具象クラス2|

## 実装するメリット
* 同じ構築コードを使用して異なる型のオブジェクトを生成できる。
* 複雑な構築用コードをインスタンスのロジックと分割できる。
## デメリット(懸念点)
* 複数の新規クラス(Concrete builder 1,2,..)を作成する必要があるため、コード全体の複雑さが増加する。

## 実装したコードへのリンク
* [C++](https://github.com/sakana7392/Design_Patterns/tree/main/Builder/c++)
* [TypeScript](https://github.com/sakana7392/Design_Patterns/tree/main/Builder/TypeScript)