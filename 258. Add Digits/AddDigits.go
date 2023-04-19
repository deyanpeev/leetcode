package main

import "fmt"

func main() {
	fmt.Println(addDigits(38))
}

func addDigits(num int) int {
	for num >= 10 {
		digits := getDigits(num)
		num = 0
		for _, n := range digits {
			num += n
		}
	}
	return num
}

func getDigits(num int) []int {
	var ret []int

	for num != 0 {
		ret = append(ret, num%10)
		num /= 10
	}

	return ret
}
