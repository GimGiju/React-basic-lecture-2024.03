const obj = {name:'james', age:25, job:'proprammer'};
let age = 'age';            // 변수로 키값을 넣어주면 obj[age] 이렇게 해도 출력됨
console.log(obj.name, obj[age], obj['job']);


for (let key in obj){           // 반복문을 사용할때 사용하는 방식
    console.log(obj[key]);
}
