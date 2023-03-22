package main

import (
	"fmt"
)

func main() {
	fmt.Println(convertToTitle(26))
}

func convertToTitle(columnNumber int) string {
	ASCII_A := 65
	var result string
	var rem int
	for columnNumber > 0 {
		rem = columnNumber % 26
		result = string(rem+ASCII_A-1) + result
		columnNumber /= 26
	}

	return result
}
