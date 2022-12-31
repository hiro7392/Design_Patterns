#ifndef STD_INCLUDE
#include "stdef.hpp"
#endif
class CharDisplay:public AbstractDisplay {
    public:
        CharDisplay(char c,string Message){
            character=c;
            this->startMessage=Message;
        }
    protected:
        void print() const override{
                cout<<character;
            }
        void open()const override{
            cout<<"<<";
        }
        void close()const override{
            cout<<">>"<<endl;
        }
        

    private:
    char character;
};