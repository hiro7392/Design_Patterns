package main

func (b *BookShelf)CreateIterator() Iterator{
	return &BookIterator{
		books:b.books,
	}
}