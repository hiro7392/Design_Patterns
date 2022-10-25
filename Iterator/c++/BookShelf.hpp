#ifndef STD_INCLUDE
#include "stdef.hpp"
#endif
#include "Book.hpp"
#include "Iterator.hpp"
template <class T>
class BookShelf{
    //  
    friend class Iterator<T,BookShelf>;

    public:
        BookShelf(){}
        BookShelf(int maxsize){
            this->books.resize(maxsize);
        }
        // BookShelf Iterator
        Iterator<T,BookShelf> *CreateIterator(){
            return new Iterator<T,BookShelf>(this);
        }
        T getBookAt(int i){
            return books[i];
        }
        void appendBook(T book){
            books[last++]=book;
        }
        int getLength(){
            return books.size();
        }
    private:
        vector<T> books;
        int last=0;
};