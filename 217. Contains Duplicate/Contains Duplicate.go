package main

import "fmt"

func main() {
	fmt.Println(containsDuplicate([]int{1, 2, 3}))
}

func containsDuplicate(nums []int) bool {
	for i := 0; i < len(nums); i++ {
		for j := i + 1; j < len(nums); j++ {
			if nums[i] == nums[j] {
				return true
			}
		}
	}

	return false
}
