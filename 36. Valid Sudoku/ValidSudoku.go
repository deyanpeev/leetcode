package main

import "fmt"

const EMPTY_SYMBOL byte = '.'
const BOARD_SIZE = 9

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
	return isValidRows(board) && isValidCols(board) && validateBoxes(board)
}

func isValidRows(board [][]byte) bool {
	return genericValidator(board, Row)
}

func isValidCols(board [][]byte) bool {
	return genericValidator(board, Col)
}

func validateBoxes(board [][]byte) bool {
	for bigRow := 0; bigRow < BOARD_SIZE; bigRow += 3 {
		for bigCol := 0; bigCol < BOARD_SIZE; bigCol += 3 {
			var currentSymbols []byte
			for row := bigRow; row < bigRow+3; row++ {
				for col := bigCol; col < bigCol+3; col++ {
					symbol := board[row][col]
					if symbol == EMPTY_SYMBOL {
						continue
					}
					if contains(currentSymbols, symbol) {
						return false
					}
					currentSymbols = append(currentSymbols, symbol)
				}
			}
		}
	}

	return true
}

func genericValidator(board [][]byte, el MatrixElement) bool {
	for i := 0; i < BOARD_SIZE; i++ {
		var currentSymbols []byte
		for j := 0; j < BOARD_SIZE; j++ {
			var symbol byte
			if el == Row {
				symbol = board[j][i]
			} else if el == Col {
				symbol = board[i][j]
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
