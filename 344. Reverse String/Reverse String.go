package main

func main() {

}

func reverseString(s []byte) {
	size := len(s)
	for i := 0; i < size/2; i++ {
		reverseI := size - i - 1
		s[i], s[reverseI] = s[reverseI], s[i]
	}
}
