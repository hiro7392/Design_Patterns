package main

import "fmt"

type Epson struct {
}

func (ep *Epson) printFile() {
	fmt.Println("epson printFile called")
}
