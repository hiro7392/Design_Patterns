package main

import "fmt"
type Windows struct {
	printer Printer
}
func (m *Windows) Print() {
	fmt.Println("windows computer print!")
}
func (m *Windows) setPrinter(pr Printer) {
	m.printer = pr
}