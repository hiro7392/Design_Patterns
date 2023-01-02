package main

import "fmt"

type Lfu struct {
}

func (l *Lfu) evict(c *Cache) {
	fmt.Println("Evicting by lfu")
}

type Fifo struct {
}

func (f *Fifo) evict(c *Cache) {
	fmt.Println("Evicting by fifo")
}

type Lru struct {
}

func (l *Lru) evict(c *Cache) {
	fmt.Println("Evicting by lru")
}
