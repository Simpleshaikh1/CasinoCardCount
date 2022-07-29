// I use a switch case in replace of if statement

// let count = 0;

// function cc(card) {
  
// switch (card){
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//   case 6:
//     count ++;
//     break;
//   case 10:
//   case "J":
//   case "Q":
//   case "K":
//   case "A":
//     count --;
//     break;
// }
// if (count > 0){
//   return count + "Bet"
// }else{
//   return count + "Hold"
// }

//   return "Change Me";
 
// }

// cc(2); cc(3); cc(7); cc('K'); cc('A');

// console.log(count)

//Achieving Card Counting with if statement

// innitializing a count variable to 0;
let count = 0;

// inniatializing a regex variable to hold JQKA
let regex = /[JQKA]/
//creating a card-counting function with card parsed as a parameter

function CC(card){
    // using if statement to increase count if the condition is met, if not decrease
    if (card > 1 && card < 7){
        count ++
    }else if(card === 10 || regex.test(card)){
        count --
    }

    if (card > 0) 
    return count + " Bet"
    return count + " Hold"
}

CC(2); CC(3); CC(7); CC('K'); CC('A');

