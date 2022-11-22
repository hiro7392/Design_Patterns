#ifndef STD_INCLUDE
#include "stdef.hpp"
#endif
#include"abstractDisplay.cpp"
#include"charDisplay.cpp"
#include"stringDisplay.cpp"

int main(){

    CharDisplay chDisplay('x',"Char Display");
    chDisplay.display ();

    cout<<endl;
    StringDisplay strDisplay("this is message","String Display");
    strDisplay.display();

    return 0;
}