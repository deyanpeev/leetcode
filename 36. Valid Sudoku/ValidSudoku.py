from typing import List
import math

BOARD_RANGE = 9
EMPTY_CELL = '.'

class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        s = set()
        for row in range(0, BOARD_RANGE):
            for col in range(0, BOARD_RANGE):
                digit = board[row][col]
                if digit is EMPTY_CELL: continue
                boxRow, boxCol = math.floor(row/3), math.floor(col/3)
                strRow, strCol, strBox = f"{digit} row {row}", f"{digit} col {col}", f"{digit} box {boxRow}{boxCol}"
                if strRow in s or strCol in s or strBox in s:
                    return False
                s.update([strRow, strCol, strBox])
        return True

board = [["5","3",".",".","7",".",".",".","."]
        ,["6",".",".","1","9","5",".",".","."]
        ,[".","9","8",".",".",".",".","6","."]
        ,["8",".",".",".","6",".",".",".","3"]
        ,["4",".",".","8",".","3",".",".","1"]
        ,["7",".",".",".","2",".",".",".","6"]
        ,[".","6",".",".",".",".","2","8","."]
        ,[".",".",".","4","1","9",".",".","5"]
        ,[".",".",".",".","8",".",".","7","9"]]
s = Solution()
print(s.isValidSudoku(board))