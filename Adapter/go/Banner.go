package main

import "fmt"

type Banner struct {
	str string
}
func newBanner(str string)*Banner {
	b:=new(Banner)
	b.str=str
	return b
}

func (b *Banner) showWithParen() {
	fmt.Printf("(%s)\n", b.str)
}
func (b *Banner) showWithAster(){
	fmt.Printf("*%s*\n", b.str)

}
