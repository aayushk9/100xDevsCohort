// concat
const firstArray = [1,2,3];
const secondArray = [4,5,6];
console.log(firstArray.concat(secondArray));

// second way to concanatate 

for(let i = 0; i < secondArray; i++){
   const finalArray =  firstArray.concat(secondArray[i]);
}

console.log(firstArray);

// iterate
function logThing(str){
    console.log(str);
}


firstArray.forEach(logThing);

// classes

class Animal {
    constructor(name, legCount, speak) {
        this.name = name;
        this.legCount = legCount
        this.speak = speak
    }

    speak(){
        console.log('Hi there' + this.speak);
    }
}

let dog = new Animal("dog", 4, "bhow bhow"); // creating object
let cat = new Animal("cat", 4, "Meow");
cat.speak(); // call function on object


//  Date

const currentDate = new Date();

console.log(currentDate.getMonth() + 1);
console.log(currentDate.getDate())
console.log(currentDate.getFullYear());

console.log("Time in milleseconds since 1970: ", currentDate.getTime())

function currentTimePrint(){
    console.log(new Date().getTime());
}

// json
 const users= '{ "name": "Aayush", "age": 20,"gender": "male"}'

 // JSON.parse
 const user1 = JSON.parse(users);
 console.log(user['gender']);

 const users2 = {
    name: "Joe",
    age: 21
 }

 // JSON.stringify
 const user2 = JSON.stringify(users2)
 console.log(user2['name'])