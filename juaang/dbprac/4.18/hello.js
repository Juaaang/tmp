const p1 = ['rock', 'paper', 'scissors', 'scissors', 'rock', 'rock', 'paper', 'paper', 'rock', 'scissors']
const p2 = ['paper', 'paper', 'rock', 'scissors', 'paper', 'scissors', 'scissors', 'rock', 'rock', 'rock']

const playGame = (p1_choice, p2_choice) => {
  if(p1_choice==p2_choice){
    return 0
  } else if ((p1_choice == 'rock' && p2_choice == 'scissors') || (p1_choice =='scissors' && p2_choice == 'paper') || (p1_choice == 'paper' && p2_choice == 'rock')){
    return 1
  } else {
    return 2
  }
}
for (game in p1){
  console.log(playGame(p1[game], p2[game]))
}
// 2
// 0
// 2
// 0
// 2
// 1
// 2
// 1
// 0
// 2