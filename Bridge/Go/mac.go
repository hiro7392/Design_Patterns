package main

import "fmt"

type Mac struct {
	printer Printer
}

func (m *Mac) Print() {
	fmt.Print("Mac Computer Print")
	m.printer.printFile()

}
func (m *Mac) setPrinter(pr Printer) {
	m.printer = pr
}
