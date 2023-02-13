import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        System.out.println(romanToInt("LXII"));
    }

    public static int romanToInt(String s) {
        Map<Character, Integer> digitsMap = DigitList.getDigitMap();
        String orderedDigits = DigitList.getSortedDigit();

        int result = 0;

        for(int i = 0; i < s.length(); i++) {
            Character currentDigit = s.charAt(i);
            int indexOfDigit = orderedDigits.indexOf(currentDigit);
            if(i != s.length() - 1) {
                Character nextDigit = s.charAt(i+1);
                int indexOfNextDigit = orderedDigits.indexOf(nextDigit);

                if(indexOfDigit < indexOfNextDigit) {
                    result -= digitsMap.get(currentDigit);
                    continue;
                }
            }
            result += digitsMap.get(currentDigit);
        }

        return result;
    }
}

class DigitList {
    private static final List<Digit> digitList = Arrays.asList(
            new Digit('I', 1),
            new Digit('V', 5),
            new Digit('X', 10),
            new Digit('L', 50),
            new Digit('C', 100),
            new Digit('D', 500),
            new Digit('M', 1000)
    );

    private DigitList() {}

    public static Map<Character, Integer> getDigitMap() {
        return digitList.stream().collect(Collectors.toMap(Digit::getSymbol, Digit::getSize));
    }

    public static String getSortedDigit() {
        return digitList.stream().map(el -> Character.valueOf(el.getSymbol()))
                .map(String::valueOf)
                .collect(Collectors.joining());
    }
}

class Digit {
    private char symbol;
    private int size;

    public Digit(char symbol, int size) {
        this.symbol = symbol;
        this.size = size;
    }

    public char getSymbol() {
        return symbol;
    }

    public int getSize() {
        return size;
    }
}