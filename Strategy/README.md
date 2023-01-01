# Strategy
## 概要
振る舞いのアルゴリズムを交換可能にする実装パターン。
アルゴリズム部分のinterfaceをStrategyとして定義することで、実装されたアルゴリズムを交換可能にする。
## クラスの関係

| 名称               | 説明                                |
| ------------------ | ----------------------------------- |
| Context            | Strategyを利用するクラス          |
| Strategy           | アルゴリズムのAPIを定義            |
| ConcreteAlgorithm1 | Strategyを実装する具象クラス1 |
| ConcreteAlgorithm2 | Strategyを実装する具象クラス2 |
## 実装の詳細

[TypeScriptでの実装](https://github.com/sakana7392/Design_Patterns/tree/main/Strategy/TypeScript)
<br>Java本の実装を参考

ジャンケンをStrategyパターンで実装
| 名称            | 説明                                                                          |
| --------------- | ----------------------------------------------------------------------------- |
| Player(Context) | Strategyを利用するクラス |
| Strategy | ジャンケンのAPIを定義したインターフェイス |
| WinningStrategy | 勝った場合勝った手をつづけて出す、そうでなければランダムで選択する具象クラス1。Stategyを実装する |
| ProbStrategy | 過去の勝率が高い手を選択する具象クラス2。Stategyを実装する |






## 実装するメリットとデメリット
### メリット
### デメリット
## 実装したコード

* [TypeScript](https://github.com/sakana7392/Design_Patterns/tree/main/Strategy/TypeScript)
* [Go](https://github.com/sakana7392/Design_Patterns/tree/main/Strategy/Go)
