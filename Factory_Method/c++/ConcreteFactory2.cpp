class ConcreteFactory2:public Factory{

    public:
        Product* createProduct() const override{
            return new ConcreteProduct2();
        };
};