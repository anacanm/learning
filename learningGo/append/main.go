package main

import "fmt"

func getData() []string {
	b := make([]string, 3, 10000)
	b[0] = "yee"
	b[1] = "haw"
	b[2] = "cowboy"

	for i := range b {
		fmt.Println("B: ", b[i], &b[i])
	}
	return append([]string{}, b[0:3]...)

}

func main() {

	c := getData()

	for i := range c {
		fmt.Println("C: ", c[i], &c[i])
	}
}

