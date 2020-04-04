package main

import (
	"fmt"
)

func sliceSemantics() {
	var arr [3]int

	arr = [3]int{1, 2, 3}
	slic := arr[:]

	for i, v := range slic { // a copy is made of the value of slic here, which has a pointer to arr, slic holds no underlying data itself, the values are held in arr
		// the # of iterations that will happen is the length of slic at the time of copy.
		//So, if you were to append to slic so that it pointed to a new array, the copy of slic (and therefore the values that it points to) would not have access to this
		if i == 1 {
			arr[i+1] = 50 // here, arr is being modified, and because the copy of slic still holds the same address to arr, the change will be reflected in v
		}
		fmt.Printf("%v, ", v) // v is a temp copy (always at the same mem address)

	}
	fmt.Printf("\nAfter: %v\n\n", slic)
}

func valueSemantics() {
	var arr [3]int

	arr = [3]int{1, 2, 3}

	for i, v := range arr { //here, a copy of arr is made, and v iterates through that copy
		if i == 1 {
			arr[i+1] = 50 //here, arr is being modified, but the loop will continue to iterate over the copied arr
		}
		fmt.Printf("%v, ", v)
	}
	fmt.Printf("\nAfter: %v\n\n", arr)
}

func pointerSemantics() {
	var arr [3]int

	arr = [3]int{1, 2, 3}

	for i := range arr { //here, no copy of arr is made, this loop iterates through arr itself
		if i == 1 {
			arr[i+1] = 50 //here arr is being modified, and the changes will be reflected within the loop
		}
		fmt.Printf("%v, ", arr[i])
	}
	fmt.Printf("\nAfter: %v\n\n", arr)

}

func main() {
	sliceSemantics()
	valueSemantics()
	pointerSemantics()
}
