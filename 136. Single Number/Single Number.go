package main

import (
	"fmt"
)

func singleNumber(nums []int) int {
	var result uint64
	result = 0
	for _, num := range nums {
		result ^= uint64(num)
	}

	return int(result)
}

func main() {
	fmt.Println(singleNumber([]int{2, 2, 1, 1}))
}
