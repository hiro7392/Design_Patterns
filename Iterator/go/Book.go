package main

type Book struct {
	name string
}

func (book *Book) getName() string {
	return book.name
}

// コンストラクタ
func NewBook(name string) *Book{
	b:=new(Book)
	b.name = name
	return b
}
