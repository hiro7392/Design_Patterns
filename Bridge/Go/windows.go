package main

import "fmt"

type Windows struct {
	printer Printer
}

func (w *Windows) Print() {
	fmt.Println("windows computer Print")
	w.printer.printFile()
}
func (m *Windows) setPrinter(pr Printer) {
	m.printer = pr
}
