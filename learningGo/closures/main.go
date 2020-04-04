package main

import (
	"fmt"
)

func iter() func() {
	i := 0
	return func() {
		i++
		fmt.Println(i)
	}
}

func main() {
	f := iter()
	f()
	f()
}
