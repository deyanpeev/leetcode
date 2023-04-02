package main

import "fmt"

var EMPTY_SYMBOL byte = '.'

type MatrixElement int

const (
	Col MatrixElement = iota
	Row               = iota
)

func main() {
	board := [][]byte{
		{'5', '3', '.', '.', '7', '.', '.', '.', '.'},
		{'6', '.', '.', '1', '9', '5', '.', '.', '.'},
		{'.', '9', '8', '.', '.', '.', '.', '6', '.'},
		{'8', '.', '.', '.', '6', '.', '.', '.', '3'},
		{'4', '.', '.', '8', '.', '3', '.', '.', '1'},
		{'7', '.', '.', '.', '2', '.', '.', '.', '6'},
		{'.', '6', '.', '.', '.', '.', '2', '8', '.'},
		{'.', '.', '.', '4', '1', '9', '.', '.', '5'},
		{'.', '.', '.', '.', '8', '.', '.', '7', '9'},
	}
	fmt.Println(isValidSudoku(board))
}

func isValidSudoku(board [][]byte) bool {
	return isValidRows(board) && isValidCols(board)
}

func isValidRows(board [][]byte) bool {
	return genericValidator(board, Row)
}

func isValidCols(board [][]byte) bool {
	return genericValidator(board, Col)
}

func genericValidator(board [][]byte, el MatrixElement) bool {
	for i := 0; i < len(board); i++ {
		var currentSymbols []byte
		for j := 0; j < len(board); j++ {
			var symbol byte
			if el == Row {
				symbol = board[i][j]
			} else if el == Col {
				symbol = board[j][i]
			}

			if symbol == EMPTY_SYMBOL {
				continue
			}
			if contains(currentSymbols, symbol) {
				return false
			}
			currentSymbols = append(currentSymbols, symbol)
		}
	}

	return true
}

func contains(s []byte, e byte) bool {
	for _, a := range s {
		if a == e {
			return true
		}
	}
	return false
}
