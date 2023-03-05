package main

import (
	"fmt"
	"regexp"
	"strings"
)

func isPalindrome(s string) bool {
	s = strings.ToLower(s)
	s = regexp.MustCompile(`[^a-z0-9]+`).ReplaceAllString(s, "")
	sLen := len(s)
	for i := 0; i < sLen/2; i++ {
		if s[i] != s[sLen-i-1] {
			return false
		}
	}

	return true
}

func main() {
	fmt.Println(isPalindrome("h2aahh4"))
}
