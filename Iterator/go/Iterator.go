package main

//Iterator
type Iterator interface {
	hasNext() bool
	getNext() *Book
}
