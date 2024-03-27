// Destructuring
let person = {name: 'James', age:25, job:'Programmer'};

const{name, age} = person;
console.log(name, age);

person = {name, age, job:'Traveller'};
console.log(person);

let fruits = ['apple', 'banana', 'cherry'];
const [a, b, c] = fruits;       // [] 를 사용해야함
console.log(a, b, c);           // apple banana cherry
const [x, y] = fruits;      
console.log(x, y);              // apple banana

// Rest Operator
const [l, ...m] = fruits;
console.log(l, m);              //  apple [ 'banana', 'cherry' ]/ l = apple  ...m = [ 'banana', 'cherry' ] 이됨


// Spread operator
let newFruits = [...fruits, 'melon'];
console.log(newFruits);                 //[ 'apple', 'banana', 'cherry', 'melon' ] 이 출력됨
console.log([fruits, 'melon']);         // [ [ 'apple', 'banana', 'cherry' ], 'melon' ] 이렇게 어레이 안으로 들어가서 출력됨


let str = 'Java';
console.log(...str);            // J a v a

let newPerson = {...person, gender: 'male'};
console.log(newPerson);