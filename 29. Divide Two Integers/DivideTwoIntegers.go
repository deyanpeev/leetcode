package main

import (
	"fmt"
	"math"
)

func divide(dividend int, divisor int) int {
	//validate input
	MIN_VALUE := int(math.Pow(-2, 31))
	MAX_VALUE := int(math.Pow(2, 31) - 1)
	fmt.Println(MIN_VALUE, MAX_VALUE)

	if dividend == 0 {
		return 0
	} else {
		result := dividePositiveOrNegative(dividend, divisor)
		if result >= MAX_VALUE {
			return MAX_VALUE
		}
		if result <= MIN_VALUE {
			return MIN_VALUE
		}
		return result
	}
}

func dividePositiveOrNegative(dividend int, divisor int) int {
	result := 0
	minusSign := (dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)
	dividend = int(math.Abs(float64(dividend)))
	divisor = int(math.Abs(float64(divisor)))
	for dividend >= divisor {
		dividend -= divisor
		result++
	}

	if minusSign {
		return -result
	}
	return result
}

func main() {
	fmt.Println(2 ^ 31)
	fmt.Println(divide(-200, -1))
}
