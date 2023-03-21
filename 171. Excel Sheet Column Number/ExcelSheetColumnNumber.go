package main

import (
	"fmt"
	"math"
	"strings"
)

func main() {
	fmt.Println(titleToNumber("AA"))
}

func titleToNumber(columnTitle string) int {
	ASCII_A := 65
	position := 0
	result := 0
	columnTitle = strings.ToUpper(columnTitle)
	for i := len(columnTitle) - 1; i >= 0; i-- {
		currentChar := int(columnTitle[i]) - ASCII_A + 1
		result += currentChar * int(math.Pow(26, float64(position)))
		position++
	}

	return result
}
