package main

type Book struct {
	name string
}

func (book *Book) getName() string {
	return book.name
}

// コンストラクタ
func (book *Book) Book(name string) {
	book.name = name
}
