// メソッドcreateのみを実装している抽象クラス
class Factory{
    public:
        Factory(){}
        virtual ~Factory(){};
        virtual Product* createProduct() const =0;
        //virtual void registerProduct(Product Product) const =0;
        void SomeOperation()const {
            Product* product=this->createProduct();
            product->use();
        }
};