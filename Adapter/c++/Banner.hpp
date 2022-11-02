#ifndef STD_INCLUDE
#include "stdef.hpp"
#endif
#include"Print.hpp"
class Banner {
    private:
        string str;
    public :
        Banner(){
            cout<<"Banner default constructor called!"<<endl;
        };
        Banner(string str){
            this->str=str;
        }
        void shoeWithParen(){
            cout<<"("<<this->str<<")"<<endl;
        }
        void showWithAster(){
            cout<<"*"<<this->str<<"*"<<endl;
        }
};