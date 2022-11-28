//  抽象メソッドuseのみ実装
class Product{
    public:
        virtual ~Product(){};
        virtual void use() const =0;
};