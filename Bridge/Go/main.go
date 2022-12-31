package main

type refinedAbstraction1 struct {
}

func main() {
	hpPrinter := &Hp{}
	epsonPrinter := &Epson{}

	hpPrinter.printFile()
	epsonPrinter.printFile()

	macComputer := &Mac{}
	windowsComputer := &Windows{}
	//macのPCでhpのPrinterを使用する
	macComputer.setPrinter(hpPrinter)
	macComputer.Print()
	//macのPCでepsonのPrinterを使用する
	macComputer.setPrinter(epsonPrinter)
	macComputer.Print()

	//windowsのPCでepsonのPrinterを使用するz
	windowsComputer.setPrinter(epsonPrinter)
	windowsComputer.Print()

	//windowsのPCでhpのPrinterを使用する
	windowsComputer.setPrinter(hpPrinter)
	windowsComputer.Print()

}
