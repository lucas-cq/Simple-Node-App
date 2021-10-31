const argv = require('yargs/yargs')(process.argv.slice(2)).argv;

  if (argv.beer = 'IPA' && argv.amount < 2) {
    console.log('Thats it?')
  } else if (argv.beer = 'IPA' && argv.amount > 3){
    console.log('I need a nap')
  } else {
    console.log('Please give me a beer')
  }

  if (argv.beer = 'Lite' && argv.amount < 2) {
    console.log('Is this water?')
  } else if (argv.beer = 'Lite' && argv.amount > 3) {
    console.log('Wheres the urinals?!')
  } else {
    console.log('Please give me a beer')
  }

  if (argv.beer = 'Stout' && argv.amount < 2) {
    console.log('Yuck!')
  } else if (argv.beer = 'Stout' && argv.amount > 3) {
    console.log('Maybe these arent so bad');
  } else {
    console.log('Please give me a beer')
  }