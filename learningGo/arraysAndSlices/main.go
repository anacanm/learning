package main

import (
	"fmt"
)

func main() {
	// declares an array with length of 5 and assigns values
	var x [5]int
	for i := 0; i < len(x); i++ {
		x[i] = i
	}
	fmt.Println(x)

	// declares a slice with length
	z := []int{1, 2, 3, 4, 5}

	for i, v := range z {
		fmt.Println(i, v)
	}

}
