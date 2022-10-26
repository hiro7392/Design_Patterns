package main

//Bookのイテレータ
type BookIterator struct{
	index int
	books []*Book
}

func (b *BookIterator)hasNext()bool{
	return b.index<len(b.books)
}
func (b *BookIterator)getNext()*Book{
	if b.hasNext(){
		book:=b.books[b.index]
		b.index++
		return book
	}
	return nil
}