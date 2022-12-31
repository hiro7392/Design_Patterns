#include<iostream>
#include"Container.hpp"

int main(){

    //中身がintの場合
    cout<<"____Iterator with int_____"<<endl;
    Container<int>ContainerInt(4);
    for(int i=0;i<10;i++)ContainerInt.appendBook(i);    //maxsizeが4なので３までしか入らない
    Iterator<int,Container<int>> *it=ContainerInt.CreateIterator();
    for(it->First();!it->IsEnd();it->Next()){
        cout<<"element = "<<*it->Current()<<endl;
    }
    /*
    element = 0
    element = 1
    element = 2
    element = 3
    */
    cout<<"____Iterator with book_____"<<endl;
    Container<Book> container(10);
    Book book1("トムソーヤの");
    container.appendBook(book1);
    container.appendBook(Book("世界の終わりとハードボイルドワンダーランド"));
    container.appendBook(Book("Alice in Wonderland"));
    container.appendBook(Book("罪と罰"));
    container.appendBook(Book("人間失格"));

    // //イテレータを生成
    Iterator<Book,Container<Book>> *itr=container.CreateIterator();
    for(itr->First();!itr->IsEnd();itr->Next()){
        Book now =*itr->Current();
        cout<<"book name = "<<now.getName()<<endl;
    }
    //実行結果
    /*
    book name = トムソーヤの
    book name = 世界の終わりとハードボイルドワンダーランド
    book name = Alice in Wonderland
    book name = 罪と罰
    book name = 人間失格
    book name = 
    book name = 
    book name = 
    book name = 
    book name = 
    */

    
    return 0;
}