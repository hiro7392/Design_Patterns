#ifndef STD_INCLUDE
#include "stdef.hpp"
#endif
#include"abstractDisplay.cpp"
#include"charDisplay.cpp"
#include"stringDisplay.cpp"

int main(){

    cout<<"-----Char Display-------"<<endl;
    CharDisplay chDisplay('x');
    chDisplay.display ();

    cout<<endl;
    cout<<"-----String Display-------"<<endl;
    StringDisplay strDisplay("this is message");
    strDisplay.display();

    return 0;
}