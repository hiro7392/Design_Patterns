class ConcreteFactory1:public Factory{

    public:
        Product* createProduct() const override{
            return new ConcreteProduct1();
        };
};