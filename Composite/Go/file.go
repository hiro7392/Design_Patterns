package main

import "fmt"

type File struct {
	name string
	size int
}

func (f *File) GetName() string {
	return f.name
}
func (f *File) GetSize() int {
	return f.size
}
func (f *File) PrintList() {
	fmt.Printf("file: %s\n", f.name)
}

func newFile(name string, size int) File {
	f := File{}
	f.name = name
	f.size = size
	return f
}
