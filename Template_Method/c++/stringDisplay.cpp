#ifndef STD_INCLUDE
#include "stdef.hpp"
#endif


class StringDisplay:public AbstractDisplay{
    public:
        StringDisplay(string str){
            message=str;
            stringSize=str.size();
        }
    private:
        string message;
        int stringSize;
        void print()const override{
            cout<<"|"<<message<<"|"<<endl;
        }
        void open()const override{
            PrintLine();
        }
        void close() const override{
            PrintLine();
        }
        void PrintLine()const {
            for(int i=0;i<stringSize+2;i++)cout<<"-";
            cout<<endl;
        }

};