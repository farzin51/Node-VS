//Globals - NO WINDOW     !!!!!!

//__dirname -path to current directory
//__filename -file name
//require -function to use modules (CommonJS)
//module -info about curremt module
//process -info about env where the program is being execute

console.log(__dirname);
console.log(__filename);
console.log(require);
console.log(module);
console.log(process);

setInterval(() => {
   console.log(`Hello`)
}, 1000)