package main

func main(){
	
	printBanner:=newPrintBanner("Adapter implemented!")
	printBanner.printWeek()
	printBanner.printStrong()
	/*実行結果
	*Adapter implemented!*
	(Adapter implemented!)
	*/
}