// Code to run Yargs
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

// An "if else" statement for each type of beer and amount

  if (!argv.beer) {
    //If a type of beer is not listed, this will run
    console.log('Please enter a type of beer')

  } else if (!argv.amount) {
    //If an amount of beer is not listed, this will run
    console.log('Please enter an amount of beer')

  } else if (argv.beer === 'IPA' && argv.amount <= 2) {
    // This returns a line regarding too little beer if the amount is less or equal to 2
    console.log('Thats it?')

  } else if (argv.beer === 'IPA' && argv.amount > 2) {
    // This returns a line regarding too much beer if the amount is greater than 2
    console.log('I need a nap')

  } else if (argv.beer === 'Lite' && argv.amount <= 2) {

    console.log('Is this water?')

  } else if (argv.beer === 'Lite' && argv.amount > 2) { 

    console.log('Wheres the urinals?!')

  } else if (argv.beer === 'Stout' && argv.amount <= 2) {

    console.log('Yuck!')

  } else if (argv.beer === 'Stout' && argv.amount > 2) {

    console.log('Maybe these arent so bad');

  } else {
    //If all else fails this will display a broad error
    console.log('Please give me a beer and an amount')
  }
