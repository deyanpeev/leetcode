package main

import "fmt"

func main() {
	fmt.Println(isIsomorphic("gogo", "titi"))
}

func isIsomorphic(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	charsMap1 := make(map[byte]byte)
	charsMap2 := make(map[byte]byte)
	for i := 0; i < len(s); i++ {
		c1, c2 := s[i], t[i]
		c3, exist := charsMap1[c1]
		c4, exist2 := charsMap2[c2]
		if !exist && !exist2 {
			charsMap1[c1] = c2
			charsMap2[c2] = c1
		} else if c2 != c3 || c1 != c4 {
			return false
		}
	}

	return true
}
