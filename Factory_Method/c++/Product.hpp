//  抽象メソッドuseのみ実装
class Product{
    public:
        virtual ~Product(){};//デフォルトコンストラクタを忘れない
        virtual void use() const =0;
};