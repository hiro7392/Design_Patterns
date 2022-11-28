#ifndef STD_INCLUDE
#include "stdef.hpp"
#endif
#include"Product.hpp"
#include"ConcreteProduct1.cpp"
#include"ConcreteProduct2.cpp"

#include"Factory.hpp"
#include"ConcreteFactory1.cpp"
#include"ConcreteFactory2.cpp"



//  クライアントはConcreteProduct1,2について知らないが利用可能
void ClientCode(const Factory& factory){
    
    factory.SomeOperation();
}

int main(){

    Factory* factory=new ConcreteFactory1();
    ClientCode(*factory);

    Factory* factory2=new ConcreteFactory2();
    ClientCode(*factory2);
    
    return 0;
}