// function second() {
//   console.log('2')
//   return ;
// }
// function first(){
//   second()
//   console.log('1')
//   return ;
// }
// first()

// const fs = require('fs');

// // Asynchronous
// console.time('Async');
// fs.readFile('file.txt', 'utf-8', (err, asyncData) => {
//     console.timeEnd('Async');
// });

// // Synchronous
// console.time('Sync');
// const syncData = fs.readFileSync('file.txt', 'utf-8');
// console.timeEnd('Sync');

console.time('I/O Task');
setTimeout(() => {
    console.timeEnd('I/O Task');
}, 1000);

console.time('CPU Task');
const start = Date.now();
while (Date.now() - start < 1000) {}
console.timeEnd('CPU Task');
console.log(Date.now() - start)


/*
call stack
LIFO이므로 
1. first()
2. first() -> second() -> console.log('2')
// second가 종료되면 first의 마지막 문장을 실행
3. first() -> console.log('1')
4. null
*/

