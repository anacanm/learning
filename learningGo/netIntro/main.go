package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
)

func main() {
	resp, err := http.Get("http://newsapi.org/v2/everything?q=bitcoin&from=2020-02-20&sortBy=publishedAt&apiKey=") //insert key here for it to work
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error: %v", err)
		os.Exit(1)
	}
	fmt.Printf("%v\n", resp.Body)
	b, err := ioutil.ReadAll(resp.Body)
	resp.Body.Close()

	if err != nil {
		fmt.Fprintf(os.Stderr, "Error: %v", err)
		os.Exit(1)
	}

	fmt.Printf("%s", b)

}
