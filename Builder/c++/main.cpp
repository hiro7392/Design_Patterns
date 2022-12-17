#include<iostream>
#include<string>
#include<fstream>
#include<vector>

using namespace std;
//  抽象クラス Builder
class Builder{
        
    public:
        // 仮装関数
        Builder(){};
        virtual ~Builder(){};
        virtual void makeString(string str)const=0;
        virtual void makeTitle(string title)const =0;
        virtual void makeItems(vector<string> items)const =0;
        virtual void close()const =0;
};
//　具象クラス1
//  HTMLファイルを使って文書を作成するクラス
class HTMLBuilder:public Builder{
    
    public:
        string* filename;   //ファイル名
        string* content;    //中身
        HTMLBuilder(){};
        ~HTMLBuilder(){};
        void makeString(string str)const override{
            *this->content+="<p>";
            *this->content+=str;
            *this->content+="</p>";
        }
        void makeTitle(string title)const override{
            
            //  ヘッダー部分
            *this->content+="<!DOCTYPE html>\n";
            *this->content+="<html>\n";
            *this->content+="<head><title>";
            *this->content+=title;
            *this->content+="<head><title>\n";
            *this->content+="</title></head>\n";
            *this->content+="<body>\n";
            *this->content+="<h1>";
            *this->content+=title;
            *this->content+="</h1>\n\n";

            //  ファイル名をタイトルに合わせる
            title+=".html";
            *this->filename=title;
        }
        void makeItems(vector<string> items)const override{
            *this->content+="<ul>";
            for(int i=0;i<items.size();i++){
                *this->content+="<li>";
                *this->content+=items[i];
                *this->content+="</li>";
            }
            *this->content+="</ul>";
        }
        void close()const override{
            *this->content+="</body>";
            *this->content+="</html>\n";
            
            ofstream writing_file(*this->filename);
            writing_file<<*this->content;
            writing_file.close();
        }
        string getHTMLResult()const{
            return *filename;
        }
};

//  具象クラス2
//  txtファイルを使って文書を作成するクラス
class TextBuilder:public Builder{
    private:
        
    public:
        string* filename;   //ファイル名
        string* content;    //中身
        TextBuilder(){};
        ~TextBuilder(){};
        void makeTitle(string title)const override{

            *this->content+=("============\n");
            *this->content+=("「");
            *this->content+=(title);
            *this->content+=("」\n\n");
            //  ファイル名をタイトルに合わせる
            title+=".txt";
            *this->filename=title;
        }
        void makeString(string str)const override{
            *this->content+=("■");
            *this->content+=str;
            *this->content+=("\n\n");
        }
        void makeItems(vector<string> items)const override{
            for(int i=0;i<items.size();i++){
                *this->content+=("・");
                *this->content+=items[i];
                *this->content+=("\n");
            }
            *this->content+=("\n");
        }
        void close()const override{
            ofstream writing_file(*this->filename);
            writing_file<<*this->content;
            writing_file.close();
        }

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
            // builder->makeString("一般的なあいさつ");
            // builder->makeItems(vector<string>{
            //     "How are you?",
            //     "Hello",
            //     "Hi"
            // });
            // builder->close();
        }
};



void client(){
    TextBuilder* textBuilder=new TextBuilder();
    Director *director1=new Director(textBuilder);
    director1->construct();

    HTMLBuilder *htmlBulder=new HTMLBuilder();
    Director *director2=new Director(htmlBulder);
    director2->construct();


    return;
}
int main(){
    client();

    return 0;
}