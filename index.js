// IF STATEMENT REVIEW
// Day of the Week: Prompt the user to enter a day of the week (e.g., "Monday") and say whether it's a weekday or the weekend.
// let dayOfWeek = prompt("Pick a day of the week")
//.toUpperCase() makes everything uppercase
//.toLowerCase() makes everything lowercase
// dayOfWeek = dayOfWeek.toLowerCase() 
// if (dayOfWeek === "saturday" || dayOfWeek === "sunday"){
//   console.log("Yay, no school!")
// } else {
//   console.log("Yay, school!")
// }




// Age Group Classifier: Prompt the user to enter their age and categorize them into different age groups (child (<12), teen (<18), adult (<65), senior)





// WHILE LOOPS
// Print 1 to 5




// Print from a certain number to 1

let user = prompt("enter a number ")
user = parseint(user)
while (user > 0){
  console.log(user)
  user--
}

// Summing up to 5
let sum = 0 
let counter = 0
while(sum <= 100){
  sum = counter + sum
  counter ++
}
  



// Using prompt
let student = "yariel"
let user2 = prompt("enter a students name")
while(student !== user2){
  user2 = prompt("try agian guess a different student")
}
console.log("nice")


