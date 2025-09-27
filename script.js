/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div
let billInp = document.getElementById('billTotalInput')
let tipInp =  document.getElementById('tipInput')
let noOfPep = document.getElementById('numberOfPeople')
let perTot =  document.getElementById('perPersonTotal')

// Get number of people from number of people div

let noOfPeopl = Number(noOfPep.innerText)

// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
  const bill = Number(billInp.value)

  // get the tip from user & convert it into a percentage (divide by 100)
  const Tip_percentage = Number(tipInp.value)/100

  // get the total tip amount
  const Tip_amount = bill * Tip_percentage

  // calculate the total (tip amount + bill)
  const total = Tip_amount + bill
  // console.log(total)
  // calculate the per person total (total divided by number of people)
  const perTotal = total / noOfPeopl

  // update the perPersonTotal on DOM & show it to user
  perTot.innerText = `$${perTotal.toFixed(2)}`
}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  noOfPeopl += 1

  // update the DOM with the new number of people
  noOfPep.innerText = noOfPeopl

  // calculate the bill based on the new number of people
  calculateBill()
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  if (noOfPeopl <= 1){
  return
  }
  // decrement the amount of people
  noOfPeopl -= 1
 
  // update the DOM with the new number of people
  noOfPep.innerText = noOfPeopl

  // calculate the bill based on the new number of people
  calculateBill()
}