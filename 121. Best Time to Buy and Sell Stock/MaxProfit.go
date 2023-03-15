package main

import (
	"fmt"
)

func maxProfit(prices []int) int {
	max := 0
	for i := 0; i < len(prices)-1; i++ {
		for j := i + 1; j < len(prices); j++ {
			currentDifference := prices[j] - prices[i]
			if currentDifference > max {
				max = currentDifference
			}
		}
	}

	return max
}

func maxProfitOptimized(prices []int) int {
	buy, sell, max := 0, 1, 0
	for sell < len(prices) {
		currentDifference := prices[sell] - prices[buy]
		if currentDifference > 0 {
			if max < currentDifference {
				max = currentDifference
			}
		} else {
			buy = sell
		}
		sell++
	}

	return max
}

func main() {
	arr := []int{7, 1, 5, 3, 6, 4}
	max := maxProfitOptimized(arr)
	fmt.Println(max)
}
