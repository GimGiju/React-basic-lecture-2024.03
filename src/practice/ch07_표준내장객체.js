let str = 'c:/Temp/ss/profile/james.jpg'
// 파일의 타입
let idx = str.lastIndexOf('.');
console.log(str.substring(idx + 1));
// 파일이 있는 제일 마지막 디렉토리명
let arr = str.split('/');
console.log(arr[arr.length - 2]);       // 이렇게 해야지 디렉토리 위치가 나옴

const fruits = ['apple', 'banana', 'cherry'];
fruits.push('melon');
console.log(fruits.join(', '));    //join으로 묶음,하나의 문자열로 만듦

const numbers = [4, 7, 10, 9, 15, 6];
console.log(numbers.sort((x,y) => x-y));        // 오름차순 정렬, 배열 자체가 변화함
console.log(numbers);

// fruits.forEach(value =>{
//     console.log(value);
// });

fruits.forEach((value, index) =>{
    console.log(value, index);
});

let power = numbers.map(val => val * val);          // 제곱을 하는 함수
console.log(power);                                 // 제곱수가 리턴되어서 나옴     .map의 사용 방법

let even = numbers.filter(val => val % 2 == 0); // boolean 식을 표현하는 함수 filter  // % 2 == 0 나머지가 0이라서 짝수만 나옴
console.log(even);
console.log(fruits.filter(val => val.length >= 6));         // fruits의 글자가 6 이상인 놈만 출력됨

let sum = numbers.reduce((prev, curr) => prev + curr, 0);           // 배열안의 합, 곱 등 을 구할때 쓰는 함수 reduce
console.log(sum);           // 51, [4, 7, 10, 9, 15, 6] 의 합
console.log(numbers.reduce((prev, curr) => prev * curr));  // [4, 7, 10, 9, 15, 6] 의 곱

const complex = [
    {name: 'pad', price: 150000}, {name: 'mouse', price: 80000}, {name: 'pen', price: 30000}
];
const jsonComplex = JSON.stringify(complex);
console.log(jsonComplex);
const parseComplex = JSON.parse(jsonComplex);
console.log(parseComplex);