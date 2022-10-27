package main

type PrintBanner struct{
	str string
	banner *Banner
}
func newPrintBanner(str string)*PrintBanner{
	b:=newBanner(str)
	pb:=new(PrintBanner)
	pb.banner=b
	pb.str=str
	return pb
}
func (pb *PrintBanner)printWeek(){
	pb.banner.showWithAster()
}
func (pb *PrintBanner)printStrong(){
	pb.banner.showWithParen()
}