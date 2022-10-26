package main
type BookShelf struct {
	books []*Book
}

//具象コレクション　Concrete Collection
func (bookShelf *BookShelf)BookShelf (books []*Book){
	bookShelf.books=books
}
