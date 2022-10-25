#ifndef STD_INCLUDE
#include "stdef.hpp"
#endif
class Book{
    string name;

    public:
        Book(){}    //デフォルトコンストラクタ
        Book(string name){
            this->name=name;
        }
        string getName(){
            return this->name;
        }
};