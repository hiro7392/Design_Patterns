#ifndef STD_INCLUDE
#include "stdef.hpp"
#endif

class Product {
    public:
        virtual ~Product(){};
        virtual void use(string s)const =0;
        virtual Product *createCopy()const =0;
};

//  Productの具象クラス1
//  文字列を枠線で囲って表示する
class MessageBox:Product{
    char decorator;
    private:
        void print(int n)const {
            for(int i=0;i<n;i++)cout<<decorator;
            cout<<endl;
        }
    public:
        MessageBox(){};
        MessageBox(char c){
            this->decorator=c;
        }
        MessageBox(MessageBox* messagebox){
            this->decorator=messagebox->decorator;
        }
        void use(string s) const override{
            print(s.size()+2);
            cout<<decorator;
            cout<<s;
            cout<<decorator<<endl;
            print(s.size()+2);
        };
        Product  *createCopy() const override{
            return new MessageBox(*this);
        }

};
//  Productの具象クラス2
//  文字列に下線を引いて表示する
class UnderLinePen:Product{
    char ulchar;
    public:
        UnderLinePen(){};//デフォルトコンストラクタ
        UnderLinePen(char c){
            this->ulchar=c;
        }
        UnderLinePen(UnderLinePen* underlinepen){
            this->ulchar=underlinepen->ulchar;
        }
        void use(string s)const override{
            cout<<s<<endl;
            for(int i=0;i<s.size();i++)cout<<this->ulchar;
        }
        Product *createCopy()const override{
            return new UnderLinePen(*this);
        }
};
//  登録されたインスタンスを生成する
//  PrototypeFactory
class Manager{
    private:
        //  クラス名とクラスをセットで登録する
        map<string,Product*>mp;
    public:
        ~Manager(){}
        Manager(){}
        void registerProduct(string name,Product* prototype){
            mp.emplace(make_pair(name,prototype));
        }
        Product *createProduct(string name){

            auto it=mp.find(name);
            if(it==mp.end()){
                cout<<"クラス名 :"<<name<<" のクラスは登録されていません"<<endl;
            }
            Product* p=mp.find(name)->second;
            return p->createCopy();

        }
};



void ClientCode(const Manager& manager){
    
}

int main(){

    Manager* manager=new Manager();
    MessageBox* mBox=new MessageBox('*');
    mBox->use("hello!");

    return 0;
}