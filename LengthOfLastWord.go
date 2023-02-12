package main

import (
	"fmt"
	"strings"
)

func main() {
	fmt.Print(lengthOfLastWord("Hello World"))
}

func lengthOfLastWord(s string) int {
	splitted := strings.Split(strings.Trim(s, " "), " ")
	return len(splitted[len(splitted)-1])
}
