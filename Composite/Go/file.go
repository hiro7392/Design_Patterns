package main

import "fmt"

type File struct {
	name  string
	size  int
	entry Entry
}

func (file *File) GetName() string {
	return file.name
}
func (file *File) GetSize() int {
	return file.size
}
func (file *File) PrintList() {
	fmt.Println("file: %s\n", file.name)
}

func newFile(name string, size int) File {
	file := File{}
	file.name = name
	file.size = size
	return file
}
