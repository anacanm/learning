package main

import (
	"fmt"
)

func main() {
	var a int = 42
	fmt.Println(a)
	fmt.Printf("%T\n", a)

	type myType int

	var b myType = 43
	fmt.Println(b)
	fmt.Printf("%T\n", b)

	var c int = int(b)
	fmt.Println(c)
	fmt.Printf("%T\n", c)

}
// update main
