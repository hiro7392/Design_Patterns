package main

type Printer interface {
}
type Computer interface {
	Print()
	setPrinter(Printer)
}


type refinedAbstraction1 struct {
}

func main() {

}
