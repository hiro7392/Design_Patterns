package main

import "fmt"

type Cache struct {
	storage      map[string]string
	evictionAlgo EvictionAlgo
	capacity     int
	maxCapacity  int
}

func initCache(e EvictionAlgo) *Cache {
	storage := make(map[string]string)
	return &Cache{
		storage:      storage,
		evictionAlgo: e,
		capacity:     0,
		maxCapacity:  2,
	}
}
func (c *Cache) showAllElem() {
	fmt.Println("showing all Element")
	for key, value := range c.storage {
		fmt.Printf("key %s: value : %s\n", key, value)
	}
	fmt.Println("")
}

func (c *Cache) setEvictionAlgo(e EvictionAlgo) {
	c.evictionAlgo = e
}

func (c *Cache) add(key, value string) {
	if c.capacity == c.maxCapacity {
		c.evict()
	}
	c.capacity++
	c.storage[key] = value
}

func (c *Cache) get(key string) {
	delete(c.storage, key)
}

// ここでconcreteAlgoを実行する
func (c *Cache) evict() {
	c.evictionAlgo.evict(c)
	c.capacity--
}
