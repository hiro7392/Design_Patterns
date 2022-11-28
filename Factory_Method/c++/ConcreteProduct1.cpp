
class ConcreteProduct1:public Product{
    
    public:
        void use() const override{
            printf("product1 を使います\n");
        };
};