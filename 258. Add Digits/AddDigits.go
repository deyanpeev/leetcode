package main

import "fmt"

func main() {
	fmt.Println(addDigits(38))
}

func addDigits(num int) int {
	for num >= 10 {
		num = getDigitsSum(num)
	}
	return num
}

func getDigitsSum(num int) int {
	var sum int

	for num != 0 {
		sum += num % 10
		num /= 10
	}

	return sum
}
