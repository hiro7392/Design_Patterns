package main

type Iterator interface {
	hasNext() bool
	getNest() Book
}

type BookShelf struct {
	books []*Book
}

func (bookShelf *BookShelf)BookShelf (books []*Book){
	bookShelf.books=books
}