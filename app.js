const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

  if (argv.beer === 'IPA' && argv.amount <= 2) {

    console.log('Thats it?')

  } else if (argv.beer === 'IPA' && argv.amount > 2) {

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

    console.log('Please give me a beer and an amount')

  }
