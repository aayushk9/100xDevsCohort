// synchronous => Together, one after the other only one one thing is happening at a single time
// asynchronous => opposite of synchronous, multiple things are context switching with each other

// common async functions js provides 
/* 
 1) setTimeout
 2) fs.readFile ( to read file from system)
 3) fetch (to fetch some data from an API endpoint)
  */

 const fs = require('fs');
// filesystem module

fs.readFile("a.txt", "utf-8", function(err, data){
    console.log(data);
})

console.log('Hey from promises.js')

setTimeout(function(){
    console.log('I am a timeout')
}, 5000);

let a = 0;
for(let i = 0; i < 30; i++){
   a = a+ i;
}
console.log(a);

// asynchronous function  and Promises
function aayushReadFile(){
    return new Promise(function(resolve){
        fs.readFile('a.text', 'utf-8', function(err, data){
            resolve(data);
        });
    });
}

// callback function to call
function onDone(data){
    console.log(data);
}

aayushReadFile().then(onDone);



var d = new Promise(function(resolve){
    setTimeout(function(){
        resolve('foo');
    }, 1000)
});

function callback(){
    console.log(d);
}

console.log(d);
d.then(callback);

// Promises => It is just a class that makes callbacks and async functions slightly more readable

function aayushsAsyncFunction(){
    let p = new Promise(function(resolve){
        setTimeout(resolve, 2000)
    })
    return p;
}

/* aayushsAsyncFunction.then(function(){
    console.log('Hi there')
}) 
   */

// Async and Await
async function main(){
    const value = await aayushsAsyncFunction();
    console.log(value);
}

main();

// using async await
function asyncAwait(){
    let a = new Promise(function(resolve){
        resolve('Hi there');
    })
    return a;
}

// function asyncAwait gets called here
async function main2(){
    const value = await asyncAwait();
    console.log(value);
}

main2();