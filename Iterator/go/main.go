package main

import "fmt"

func main() {
	book1 := &Book{
		name: "トムソーヤの冒険",
	}
	book2 := NewBook("世界の終わりとハードボイルドワンダーランド")
	bookShelf := BookShelf{
		books: []*Book{book1, book2},
	}
	// イテレータの生成
	iterator := bookShelf.CreateIterator()
	for iterator.hasNext() {
		book := iterator.getNext()
		fmt.Printf("book = %+v\n", book)
	}

}
