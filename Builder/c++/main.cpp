#include<iostream>
#include<string>
#include

using namespace std;
//  抽象クラス Builder
class Builder{
    public:
        // 仮装関数
        virtual ~Builder(){};
        virtual void makeString(string str)const=0;
        virtual void makeTitle(string str)const =0;
        virtual void makeItems(string items[])const =0;
        virtual void close()const =0;
};
//　具象クラス1
//  HTMLファイルを使って文書を作成するクラス
class HTMLBuilder:public Builder{
    
    string filename;
    string content;
    int a;
    public:
        HTMLBuilder(){};
        void makeTitle(string str)const override{
            str.append(".html");
            makeContent(str);
        }
        void makeContent(string title)const{

        }
};

class TextBuilder:public Builder{
    string filename;
    string content;
    public:
        TextBuilder(){}

};

// 1つの文書を作るクラス
class Director{
    private:
        Builder* builder;
    public:
        //  コンストラクタ
        Director(Builder* builder){
            this->builder=builder;
        };
        //  文書を作るメソッド
        void construct(){
            builder->makeTitle("Greeeting");
            builder->makeString("一般的なあいさつ");
            builder->makeItems(new string[]{
                "How are you?",
                "Hello",
                "Hi"
            });
            builder->close();
        }
};



void client(){
    return;
}
int main(){

    return 0;
}