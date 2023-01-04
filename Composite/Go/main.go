package main

import "fmt"

func main() {
	f1 := newFile("text.html", 120)
	f2 := newFile("README.md", 110)
	d1 := newFolder("src")
	f1.GetName()
	f2.GetSize()
	d1.GetName()
	d1.Add(&f1)
	d1.Add(&f2)
	d1.PrintList()

	fmt.Printf("folder %s :size = %d\n", d1.GetName(), d1.GetSize())
}

/*result
foler: src
file: text.html
file: README.md
folder src :size = 230
*/
