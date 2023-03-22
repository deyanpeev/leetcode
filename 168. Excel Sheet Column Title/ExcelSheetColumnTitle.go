package main

import (
	"fmt"
)

func main() {
	fmt.Println(convertToTitle(701))
}

func convertToTitle(columnNumber int) string {
	ASCII_A := 65
	var result string
	var rem int
	for columnNumber > 0 {
		rem = (columnNumber - 1) % 26
		result = string(rem+ASCII_A) + result
		fmt.Println(rem)
		columnNumber = (columnNumber - 1) / 26
	}

	return result
}
