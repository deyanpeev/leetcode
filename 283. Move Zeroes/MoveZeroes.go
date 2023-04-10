package main

import "fmt"

func main() {
	nums := []int{1, 0, 3, 12, 3}
	moveZeroes(nums)
	fmt.Println(nums)
}

func moveZeroes(nums []int) {
	arrSize := len(nums)
	zerosToAdd := 0
	i := 0
	for i < arrSize {
		if nums[i] == 0 {
			fmt.Println(nums[i])
			nums = append(nums[:i], nums[i+1:]...)
			arrSize--
			zerosToAdd++
		} else {
			i++
		}
	}

	for i := 0; i < zerosToAdd; i++ {
		nums = append(nums, 0)
	}
}
