# Factory Method


## 概要
Template Methodをインスタンス生成に応用する方法。スーパークラスでインスタンスの生成の枠組みを作り、サブクラスで具体的な生成を実装する。

## クラス概要
|  名称 |  説明  |
| ---- | ---- |
|  Product|  抽象メソッドuseのみ実装  |
|  Factory  | メソッドcreateのみを実装している抽象クラス  | 
|  ConcreteProduct | メソッドuseを実装しているクラス  | 
|  ConcreteFactory  |  メソッドcreateProduct,registerProductを実装しているクラス  | 
