# Factory Method


## 概要
Template Methodをインスタンス生成に応用する方法。スーパークラスでインスタンスの生成の枠組みを作り、サブクラスで具体的な生成を実装する。

## クラス概要
|  名称 |  説明  |
| ---- | ---- |
|  Product|  抽象メソッドuseのみ実装  |
|  Factory  | メソッドcreateのみを実装している抽象クラス  | 
|  ConcreteProduct | メソッドuseを実装しているクラス  | 
|  ConcreteFactory  |  ConcreteProductのインスタンスを生成するメソッド(=createProduct)を実装しているクラス  | 

## 実装するメリット

* クラスを利用するClient側から具体的なクラス(ConcreteMethod)を知らなくとも利用できる。
* 抽象クラスで生成と実装の枠組みを決めることでサブクラスでの実装忘れがコンパイル時に検知できる。
* 複数の具象クラス間で最低限必要なメソッドやデータを共通化できる。
