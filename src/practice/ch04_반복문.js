let fruits = ['사과', '배', '감'];

for (let i = 0; i < fruits.length; i ++){
    console.log(fruits[i]);
}
                                                
for (let fruit of fruits){
    console.log(fruit);
}

// 인덱스 같은 키 값을 가져다줌
// 자바스크립트에서 object는 {a:'a', b:99} 이렇게 가능
// ['사과', '배', '감'] ==> {0:'사과',1: '배', 2: '감'} 자바스크립트 array임 1,2,3은 배열의 인덱스 값이 됨 
// of로 깔끔하게  사용

var x = 4;  // var 는 재선언이 가능, 코드가 길어지면 어디서  어떻ㄷ게 선언되는지 팍악이 어려움으로
var x = 6;  // 가급적이면 사용 하지 말고 let이나 const를 사용할것
let y = 4;  // let은 재선언이 안됨
// let y = 6;
