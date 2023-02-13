package main

import "fmt"

func mySqrt(x int) int {
	for i := 1; i <= x; i++ {
		multiplication := i * i
		if multiplication == x {
			return i
		}
		if multiplication > x {
			return i - 1
		}
	}
	return 0
}

func main() {
	fmt.Print(mySqrt(1))
}
