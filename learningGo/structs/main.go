package main

import (
	"fmt"
)

type badPadding struct { //here there is 21 bytes of padding!
	bool1 bool
	int1  int64
	bool2 bool
	int2  int64
	bool3 bool
	int3  int64
}

type goodPadding struct {
	int1  int64
	int2  int64
	int3  int64
	bool1 bool
	bool2 bool
	bool3 bool
}

type example struct {
	flag    bool
	counter int16
	pi      float32
}

func main() {

	//Declare a variable of type example, and initialize it to its zero value
	var e1 example

	// Also declares a variable of type example, and initialize it to its zero value, but stay consistent with initialization
	e2 := example{}
	// Declare a variable of type example, and initialize it to a struct literal
	e3 := example{
		flag:    true,
		counter: 10,
		pi:      3.14159,
	}

	//Declare a variable of a literal (anonymous/unnamed) struct type, and initizlizes it to its zero value
	var e4 struct {
		flag    bool
		counter int16
		pi      float32
	}

	//Declare a variable of a literal struct type, and initializes it to its zero value
	e5 := struct {
		flag    bool
		counter int16
		pi      float32
	}{
		flag:    true,
		counter: 10,
		pi:      31.14159,
	}

	fmt.Println(e1)
	fmt.Println(e2)
	fmt.Println(e3)
	fmt.Println(e4)
	fmt.Println(e5)

}
