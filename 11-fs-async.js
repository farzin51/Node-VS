const { readFile, writeFile } = require('fs');

// Running callback
console.log('Start');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    // provides Buffer without 'utf8' console.log(result);
   const first = result;
readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const second = result;
writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, { flag: 'a' }, (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    console.log('done with this task');
})
    })
 })
 console.log('Starting next task');