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
| RandomStrategy | 完全にRandomに手をを選択する具象クラス2。Stategyを実装する |

[Goでの実装](https://github.com/sakana7392/Design_Patterns/tree/main/Strategy/TypeScript)
<br>[Refactoring.guru](https://refactoring.guru/ja/design-patterns)を参考に実装

Cacheにmap[string]stringで要素を保存、削除するアルゴリズムを交換可能にする
アルゴの中身は実装を省略
| 名称            | 説明                                                                          |
| --------------- | ----------------------------------------------------------------------------- |
| Cache(Context) | Strategyを利用するクラス |
| EvictionAlgo(Strategy) | Chachから要素を除去するアルゴリズムのインターフェイスを定義 |
| Lfu | Evition ALgoを実装するクラス1 least frequently used で削除 |
| Fifo | Evition ALgoを実装するクラス2 First in first outで削除 |
| Lru| Evition ALgoを実装するクラス3 Least  |


## 実装するメリットとデメリット
### メリット
* 振る舞い部分が交換可能になる(検証が容易になる)。
* 実装とクライアントコードの分離
* 継承をinterfaceで置き換えられる。
* Context(Player)を変更せずに新規に振る舞い(ConcreteStrategy)を追加できる
### デメリット
* アルゴリズムの数が少ない場合はプログラムが必要以上に複雑になる(ので実装する理由がない)。
* クライアントは適切な振る舞い(Strategy)を選択するためにConcreteStrategy間の違いを知っておく必要がある。
## 実装したコード

* [TypeScript](https://github.com/sakana7392/Design_Patterns/tree/main/Strategy/TypeScript)
* [Go](https://github.com/sakana7392/Design_Patterns/tree/main/Strategy/Go)
