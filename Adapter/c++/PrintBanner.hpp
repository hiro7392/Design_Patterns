#ifndef STD_INCLUDE
#include "stdef.hpp"
#endif
#include"Banner.hpp"

//  派生クラス:基底クラス
class PrintBanner:public Banner {
    //コンストラクタ
    public:
        PrintBanner():Banner(){};
        PrintBanner(string str):Banner(str){
        }
        
        void printWeak(){
            shoeWithParen();
        }
        void printStrong(){
            showWithAster();
        }
        
};