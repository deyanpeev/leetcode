package main

import "math"

func main() {

}

func search(nums []int, target int) int {
	low := 0
	high := len(nums)

	for low < high {
		midIndex := (low + high) / 2

		first := nums[low]
		mid := nums[midIndex]
		if (mid < first) != (target < first) {
			if target < first {
				mid = math.MinInt32
			} else {
				mid = math.MaxInt32
			}
		}

		if mid < target {
			low = mid + 1
		} else if mid > target {
			high = mid
		} else {
			return mid
		}
	}

	return -1
}
