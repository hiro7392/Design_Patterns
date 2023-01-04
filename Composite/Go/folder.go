package main

import "fmt"

type Folder struct {
	name string
	dir  []Entry
}

func (f *Folder) GetName() string {
	return f.name
}
func (f *Folder) GetSize() int {
	var size int = 0
	for _, elem := range f.dir {
		size += elem.GetSize()
	}
	return size
}
func (f *Folder) PrintList() {
	fmt.Printf("foler: %s\n", f.name)
	for _, elem := range f.dir {
		elem.PrintList()
	}
}
func newFolder(name string) *Folder {
	return &Folder{
		name: name,
	}
}

func (f *Folder) Add(entry Entry) {
	f.dir = append(f.dir, entry)
}
