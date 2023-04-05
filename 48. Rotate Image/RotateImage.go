package main

import "fmt"

func main() {
	matrix := [][]int{
		{1, 2, 3},
		{4, 5, 6},
		{7, 8, 9},
	}

	rotate(matrix)

	PrintMatrix(matrix)
}

func rotate(matrix [][]int) {
	// reverse mirrored
	for i := 0; i < len(matrix)/2; i++ {
		for j := range matrix[i] {
			mirrorIndex := len(matrix) - i - 1
			matrix[i][j], matrix[mirrorIndex][j] = matrix[mirrorIndex][j], matrix[i][j]
		}
	}

	//reverse next to
	for i := range matrix {
		for j := i + 1; j < len(matrix[i]); j++ {
			matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
		}
	}
}

func PrintMatrix(matrix [][]int) {
	for i := range matrix {
		for j := range matrix[i] {
			fmt.Printf("%d ", matrix[i][j])
		}
		fmt.Println("")
	}
}
