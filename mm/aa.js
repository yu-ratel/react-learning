function solution (arr) {
  console.log(arr.reduce((acc, cur) => acc += cur.filter((v) => v).length), 0)
}

let arr = [['', '', 'O'], ['', 'X', 'X'], ['', 'O', '']];

console.log(solution(arr));