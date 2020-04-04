package main

import (
	"fmt"
)

func main() {
	var i int
	var j int

	fmt.Printf("%p %p", &i, &j)
	//since the addresses are 8 bytes apart, my computer uses a 64 bit architecture
}
