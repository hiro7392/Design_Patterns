#ifndef STD_INCLUDE
#include "stdef.hpp"
#endif
class Banner {
    private:
        string str;
    public :
        Banner(){};
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