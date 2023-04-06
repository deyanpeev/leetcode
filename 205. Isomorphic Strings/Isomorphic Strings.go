package main

import "fmt"

func main() {
	fmt.Println(isIsomorphic("gogo", "titl"))
}

func isIsomorphic(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	charsMap := make(map[byte]byte)
	for i := 0; i < len(s); i++ {
		c1, c2 := s[i], t[i]
		c3, exist := charsMap[c1]
		if !exist {
			charsMap[c1] = c2
		} else if c2 != c3 {
			return false
		}
	}

	return true
}
