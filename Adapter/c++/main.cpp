#ifndef STD_INCLUDE
#include "stdef.hpp"
#endif
#include"PrintBanner.hpp"
int main(){

    cout<<"-----Banner class------"<<endl;
    Banner ban=Banner("hello!");
    ban.shoeWithParen();
    ban.showWithAster();

    cout<<"-----PrintBanner class------"<<endl;
    PrintBanner printBanner("pb banner string");
    printBanner.printStrong();
    printBanner.printWeak();

    return 0;
}