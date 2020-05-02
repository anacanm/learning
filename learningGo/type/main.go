package main

import (
	"fmt"
)

// Hour represents the hour :)
type Hour int

// PrintHour prints the Hour to stdout
func PrintHour(h Hour) {
	fmt.Printf("%#v hour", h)
}

func main() {
	//	var a int = 42
	//	fmt.Println(a)
	//	fmt.Printf("%T\n", a)
	//
	//	type myType int
	//
	//	var b myType = 43
	//	fmt.Println(b)
	//	fmt.Printf("%T\n", b)
	//
	//	var c int = int(b)
	//	fmt.Println(c)
	//	fmt.Printf("%T\n", c)
	var h Hour
	h = 20
	PrintHour(h)
	var i int
	i = 15
	PrintHour(i)
}

// update main
