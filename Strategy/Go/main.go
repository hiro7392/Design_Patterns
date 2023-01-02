package main

func main() {
	lfu := &Lfu{}
	cache := initCache(lfu)

	cache.add("a", "1")
	cache.add("b", "2")
	cache.add("c", "3")
	cache.showAllElem()

	lru := &Lru{}
	cache.setEvictionAlgo(lru)
	cache.add("d", "4")
	cache.showAllElem()

	fifo := &Fifo{}
	cache.setEvictionAlgo(fifo)
	cache.add("e", "5")
	cache.showAllElem()

}
