package main

import (
	"fmt"
)

var lex string = "You can use variables declared with the var keyword outside of functions!"

func main() {
	x := 40
	fmt.Println(x)
	foo()
}

func foo() {
	fmt.Println(lex)
}
