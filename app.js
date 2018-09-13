'use strict';
const number = process.argv[2] || 0;
let sum = 0;
for (let i = 1; i <= number; i++) {
    sum = sum + i;
}
console.log(sum);
//console.log(process.argv[0]); => node
//console.log(process.argv[3]); => undefind
//console.log(process.argv[1]); node app.jsまで
//console.log(process.argv[2]); node app.js "指定した数値"


//ubuntu使うときはCRLF => LFにする。
