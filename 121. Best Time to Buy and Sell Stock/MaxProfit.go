package main

import "fmt"

func maxProfit(prices []int) int {
	max := 0
	for i := 0; i < len(prices)-1; i++ {
		for j := i + 1; j < len(prices); j++ {
			currentDiffeerence := prices[j] - prices[i]
			if currentDiffeerence > max {
				max = currentDiffeerence
			}
		}
	}

	return max
}

func main() {
	arr := []int{7, 1, 5, 3, 6, 4}
	max := maxProfit(arr)
	fmt.Println(max)
}
