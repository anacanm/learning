package main

import (
	"fmt"
)

//iota is pretty cool, it auto increments
const (
	_ = 1 << (10 * iota)
	kb
	mb
	gb
)

func main() {
	fmt.Println(kb)
	fmt.Println(mb)
	fmt.Println(gb)

}
