#ifndef STD_INCLUDE
#include "stdef.hpp"
#endif
#include "Book.hpp"
#include "Iterator.hpp"
template <class T>
class Container{
    //  
    friend class Iterator<T,Container>;

    public:
        Container(){}
        Container(int maxsize){
            this->books.resize(maxsize);
        }
        // Container Iterator
        Iterator<T,Container> *CreateIterator(){
            return new Iterator<T,Container>(this);
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