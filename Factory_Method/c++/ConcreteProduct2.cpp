
class ConcreteProduct2:public Product{
    
    public:
    void use()const override{
        printf("product2 を使います\n");
    };
};