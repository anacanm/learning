package main

import (
	"fmt"
	"net/http"
)

// creates a function that handles the request passed to /
func handlerFunc(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html")
	fmt.Fprint(w, "<h1>Set Content Headers!</h1>")
}

func main() {
	http.HandleFunc("/", handlerFunc)
	http.ListenAndServe("localhost:3000", nil)

}
