package main

import "fmt"

func main() {
	fmt.Println(hammingWeight(7))
}

func hammingWeight(num uint32) int {
	numberOfOnes := 0
	for num > 0 {
		numberOfOnes += int(num & 1)
		num >>= 1
	}
	return numberOfOnes
}
