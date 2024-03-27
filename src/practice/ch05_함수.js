const anony = function(){
    console.log('익명 함수');
}
function named() {
    console.log('선언적 함수');
}

anony(); named();

const arrow = () => {
    console.log('화살표 함수, 람다 함수');
}
arrow();
// 파라메터가 1개 있으면 ()를 생략 가능함;
const param1 = x => {
    console.log('x=' + x);
}
param1(5);
// 함수 내부의 실행문이 return 한개밖에 없으면 {}와 return을 생략 가능 (return 문 하나로 중괄호 생략가능 )
const add = (a, b) => a + b;
console.log(`add(3, 4) = ${add(3, 4)}`);

const fn = (name, count) => {
    // if (count == undefined){             // 가장 초급 방법 level 1
    //     count = 0;
    // }
    // count = count ? count : 0;           // 중급자 방법 level 2
    count = count || 0                      // level 3

    console.log(`${name}: ${count}`);
}
fn('apple', 10);
fn('banana');

function call3Times(callback){                   // callback을 익명함수, 매개변수 라고 생각하고 이해 바람.
    for ( let i = 0; i < 3; i++){
        callback();
    }
}
// call3Times(anony);
// call3Times(named);
// call3Times(function(){
//     console.log('콜백 함수로 직접 익명함수를 생성');
// });
call3Times(()=> {
    console.log('콜백 함수로 직접 익명함수를 생성');
});
// 자바스크립트를 가장 빠르게, 순서를 맞추고 싶어서 나오는 방법이 콜백임

// 자바는 Integet.parseInt를 사용 (하는 일 같지만 사용법 다름)

setTimeout(() =>{
    console.log('1000ms 이후에 실행됩니다.');           // 1초 후에 실행된다는말
}, 1000);   
const si = setInterval(() =>{           // 3초 후에 반복 실행되는 코드를 없앰
    console.log('0.5초 마다 실행됩니다.');
}, 500);
setTimeout(() =>{
    clearInterval(si);
    console.log('3.1초 후에 반복 실행되는 코드를 없앴습니다.');
}, 3100);