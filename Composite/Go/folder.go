package main

import "fmt"

type Folder struct {
	name  string
	dir   []Entry
	entry Entry
}

func (folder *Folder) GetName() string {
	return folder.name
}
func (folder *Folder) GetSize() int {
	var size int = 0
	for _, elem := range folder.dir {
		size += elem.GetSize()
	}
	return size
}
func (folder *Folder) PrintList() {
	fmt.Println("foler: %s\n", folder.name)
	for _, elem := range folder.dir {
		elem.PrintList()
	}
}
func newFolder(name string) *Folder {
	folder := &Folder{}
	return &Folder{
		name: name,
		size: 0,
		dir:  {},
	}
}
