package main

import (
	"fmt"
)

func main() {
	fmt.Print(lengthOfLastWord(15))
}

func lengthOfLastWord(n int) int {
	prev2 := 1
	prev1 := 1

	for i := 2; i <= n; i++ {
		curr := prev1 + prev2
		prev2 = prev1 //update pointers
		prev1 = curr
	}
	return prev1
}
