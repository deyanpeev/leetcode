package main

import "fmt"

func getRow(rowIndex int) []int {
	triangleSize := rowIndex + 1
	var result = make([]int, triangleSize)
	result[0] = 1
	for i := 1; i < triangleSize; i++ {
		for j := i; j >= 1; j-- {
			result[j] = result[j-1] + result[j]
		}
	}

	return result
}

func main() {
	fmt.Println(getRow(3))
}
