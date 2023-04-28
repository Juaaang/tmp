const inputs = [
  [3, 10, 5, [1, 3, 5, 7, 9]],    // 3
  [3, 10, 5, [1, 3, 7, 8, 9]],    // 0
  [5, 20, 5, [4, 7, 9, 14, 17]],  // 4
]

function solution(K, N, M, chargers) {
  let cnt = 0
  let i = 0
  let tmp = 0
  while (i<N){
      let check = -1
      for (let j = i+K; j > i; j--){
          if (j in chargers){
              tmp = j
              check = 0
              cnt++
              break
          }
          if (j === N){
              check = 0
          break
          }
      }
      if (check === -1){
        cnt = 0
        break
      }
      i = tmp
      check = -1
      continue
  }
  console.log(`#${cnt}`)
}
  
for (const input of inputs) {
  solution(input[0], input[1], input[2], input[3])
}