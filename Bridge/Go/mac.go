package main

import "fmt"

type Mac struct {
	printer Printer
}

func (m *Mac) Print() {
	fmt.Println("mac computer print!")
}
func (m *Mac) setPrinter(pr Printer) {
	m.printer = pr
}
