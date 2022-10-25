#include<iostream>
#include"BookShelf.hpp"

int main(){

    //中身がintの場合
    cout<<"____Iterator with int_____"<<endl;
    BookShelf<int>BookShelfInt(4);
    for(int i=0;i<10;i++)BookShelfInt.appendBook(i);    //maxsizeが4なので３までしか入らない
    Iterator<int,BookShelf<int>> *it=BookShelfInt.CreateIterator();
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
    BookShelf<Book> bookshelf(10);
    Book book1("トムソーヤの");
    bookshelf.appendBook(book1);
    bookshelf.appendBook(Book("世界の終わりとハードボイルドワンダーランド"));
    bookshelf.appendBook(Book("Alice in Wonderland"));
    bookshelf.appendBook(Book("罪と罰"));
    bookshelf.appendBook(Book("人間失格"));

    // //イテレータを生成
    Iterator<Book,BookShelf<Book>> *itr=bookshelf.CreateIterator();
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