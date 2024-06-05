// *스크립트 사전*

//2 > integer
//1.5 > float
// number(숫자,정수)
// text(문자)
// variables(변수) - 값을 저장 하거나 유지하는 역할.
// string - 처음부터 끝까지 모두 글자로 이뤄져 있다.
// boolean - true 또는 false
// operation(연산)
// constant(상수) / const - 바꾸지 않는 값.
// let - 바꿀수 있는 값 (처음 선언 할때만 필요 하고 그 뒤에 값을 선언 할때는 let 안해도 됨)
// camelCase(낙타 등 모양) 자바스크립트 - ex) myName 단어 별로 대문자를 사용.
// snake_cass(뱀 모양) 파이썬 - ex) my_name 단어 별로 _ 추가하여 사용
// null - 자바스크립트에게 여기엔 값이'비어 있음'을 의미, 자연적으로 발생하지 않음
// undefined - 어떤 variables(변수)이 메모리에 있지만 '값이 없음 or 정의 되지 않음'을 의미
// NaN - Not a Number(숫자가 아님) 이라는 의미

// array(배열)- 하나의 variables(변수) 안에 데이터의 list를 가지는 것
//  const player = ["nico",10,true]
//  - days[2] = "water" // 데이라는 변수의 오브젝트 인덱스 2번인 "안녕하세요"를 "water"로 교체한다는 뜻.
//  - push() 함수는 array(배열) 안에 추가 하는 기능 [ays.push('생선') // days라는 변수에 '생선'이라는 string 값을 추가해준것.]
//  - object 만들기 / object 안에서는 = 를 사용 하지 않는다. : 를 사용하고 , 를 마지막에 붙인다.(property를 가진 데이터를 저장)

// Todo(할일)

// ** 예제 **
// const player = { // object는 중괄호를 사용
//     name: "nico", // string
//     points: 10, // number
//     fat: true, // boolean
//     //(property를 가진 데이터를 저장)
// }
// console.log(player);
// console.log(player.name);
// player.lastName = "potato"; // object 안에 없더라도 추가 할수 있다.
// player.points = player.points + 15 // const 의 object는 수정이 가능하다. ex) player = 'ㄱㄱ' - 이거는 수정 안됨
// console.log(player);

// function - 계속 반복해서 사용할 수 있는 코드 조각
//  - argument(인수) - function을 실행 하는 동안 어떤 정보를 function에게 보내는 방법

// ** 예제 **
// function sayHello(nameOfPerson, age){ // variables(변수) 값을 넣을 수 있음
//     // 블록 안에 있는 내용은 sayHello 실행 될 대마다 반복 됨.
//     console.log("Hello my name is" + nameOfPerson + " and I'm " + age)

// }
// sayHello("nico", 10); // argument(인수)
// sayHello("dal", 23);
// sayHello("lynn", 21);

// function plus(firstNumber, secondNumber){
//     console.log(firstNumber + secondNumber);
// }
// plus(8, 60);

// const player = {
//     name: "nico",
//     sayHello: function(otherPersonsName){
//         console.log("hello! " + otherPersonsName + " nice to meet you");
//     }
// }
// console.log(player.name);
// player.sayHello("lynn");
 
// **계산기 과제
// const calculater = {
//     add: function(a,b){
//         console.log(a + b);
//     },
//     min: function(a,b){
//         console.log(a - b);
//     },
//     div: function(a,b){
//         console.log(a / b);
//     },
//     multiply: function(a,b){
//         console.log(a * b);
//     },
//     powerof: function(a,b){
//         console.log(a ** b);
//     },
// }

// calculater.add(1,2);
// calculater.min(2,1);
// calculater.div(4,2);
// calculater.multiply(4,2);
// calculater.powerof(4,2);













