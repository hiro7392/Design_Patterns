package main

type Iterator interface {
	hasNext() bool
	getNest() Book
}

type BookShelf struct {
	books []*Book
}
