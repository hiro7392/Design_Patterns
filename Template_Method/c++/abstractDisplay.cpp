#ifndef STD_INCLUDE
#include "stdef.hpp"
#endif

// 抽象クラス
class AbstractDisplay{

    public:
        void display()const{
                this->start();
                this->open();
                for(int i=0;i<5;i++){
                    this->print();
                }
                this->close();
            }
        AbstractDisplay(){};
    protected:
        void start()const{
            cout<<"----"<<startMessage<<"----"<<endl;
        }
        virtual void print() const=0 ;  //サブクラスで実装されるものはconst=0
        virtual void open() const =0;
        virtual void close() const=0;
        string startMessage;
        //  displayクラスのみ実装する
        void sayHello(){
            cout<<"start!"<<endl;
        }
};