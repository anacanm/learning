package main

import (
	"fmt"
	"net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html")
	fmt.Fprint(w, "<h1>Created handler and served it with headers in a module</h1>")

}

func main() {
	http.HandleFunc("/", handler)
	http.ListenAndServe("localhost:3000", nil)

}
