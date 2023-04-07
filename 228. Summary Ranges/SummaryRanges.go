package main

import "fmt"

func main() {
	fmt.Println(summaryRanges([]int{0, 1, 2, 4, 5, 7}))
}

func summaryRanges(nums []int) []string {
	result := []string{}

	for i := 0; i < len(nums); {
		first, second := nums[i], nums[i]
		j := i + 1
		for ; j < len(nums); j++ {
			if nums[j]-nums[j-1] > 1 {
				break
			}
			second = nums[j]
		}

		if first != second {
			result = append(result, fmt.Sprintf("%d->%d", first, second))
		} else {
			result = append(result, fmt.Sprintf("%d", first))
		}

		i = j
	}

	return result
}
