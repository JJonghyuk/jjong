// *스크립트 사전*

// ---------------------------------- WELCOME TO JAVASCRIPT ----------------------------------

// * 2 > integer
// * 1.5 > float
// * number(숫자,정수)
// * text(문자)
// * variables(변수) - 값을 저장 하거나 유지하는 역할.
// * string - 처음부터 끝까지 모두 글자로 이뤄져 있다.
// * boolean - true 또는 false
// * operation(연산)
// * constant(상수) / const - 바뀌지 않는 값.
// * let - 바꿀수 있는 값 (처음 선언 할때만 필요 하고 그 뒤에 값을 선언 할때는 let 안해도 됨)
// * camelCase(낙타 등 모양) 자바스크립트 - ex) myName 단어 별로 대문자를 사용.
// * snake_cass(뱀 모양) 파이썬 - ex) my_name 단어 별로 _ 추가하여 사용
// * null - 자바스크립트에게 여기엔 값이'비어 있음'을 의미, 자연적으로 발생하지 않음
// * undefined - 어떤 variables(변수)이 메모리에 있지만 '값이 없음 or 정의 되지 않음'을 의미
// * NaN - Not a Number(숫자가 아님) 이라는 의미

// * array(배열)- 하나의 variables(변수) 안에 데이터의 list를 가지는 것
//   const player = ["nico",10,true]
//   - days[2] = "water" // 데이라는 변수의 오브젝트 인덱스 2번인 "안녕하세요"를 "water"로 교체한다는 뜻.
//   - push() 함수는 array(배열) 안에 추가 하는 기능 [ays.push('생선') // days라는 변수에 '생선'이라는 string 값을 추가해준것.]
//   - object 만들기 / object 안에서는 = 를 사용 하지 않는다. : 를 사용하고 , 를 마지막에 붙인다.(property를 가진 데이터를 저장)

// - 예제 -
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

// * function - 계속 반복해서 사용할 수 있는 코드 조각
//   - argument(인수) - function을 실행 하는 동안 어떤 정보를 function에게 보내는 방법
//   - 내부 function 부터 실행함 --> 2.실행 parseInt( 1.실행 prompt("How old are you?"));

// - 예제 -
// function sayHello(nameOfPerson, age){ // variables(변수) 값을 넣을 수 있음
//     // 블록 안에 있는 내용은 sayHello 실행 될 대마다 반복 됨.
//     console.log("Hello my name is" + nameOfPerson + " and I'm " + age)

// }
// sayHello("nico", 10); // argument(인수)
// sayHello("dal", 23);
// sayHello("lynn", 21);

// - 예제 -
// function plus(firstNumber, secondNumber){
//     console.log(firstNumber + secondNumber);
// }
// plus(8, 60);

// - 예제 -
// const player = {
//     name: "nico",
//     sayHello: function(otherPersonsName){
//         console.log("hello! " + otherPersonsName + " nice to meet you");
//     }
// }
// console.log(player.name);
// player.sayHello("lynn");
 
// - 계산기 과제
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
//     times: function(a,b){
//         console.log(a * b);
//     },
//     powerof: function(a,b){
//         console.log(a ** b);
//     },
// }
// calculater.add(1,2);
// calculater.min(2,1);
// calculater.div(4,2);
// calculater.times(4,2);
// calculater.powerof(4,2);

// * Return - function의 밖과 소통 하는 방법
//   - console.log는 그림의 떡. 꺼내 먹으려면 return필요
//   - return 선언 전의 값은 수행 하지만, return 값 이후의 작업은 수행 하지 않음

// - 예제 -
// const age = 96;
// function calculateKrAge(ageOfForeigner){
//     return ageOfForeigner + 2;
// }
// const krAge = calculateKrAge(age);
// console.log(krAge)

// - 예제 -
// const calculater = {
//     add: function(a,b){
//         return a + b;
//     },
//     min: function(a,b){
//         return a - b;
//     },
//     times: function(a,b){
//         return a * b;
//     },
//     div: function(a,b){
//         return a / b;
//     },
//     power: function(a,b){
//         return a ** b;
//     },
// }
// const addResult = calculater.add(2,5);
// const minResult = calculater.min(addResult, 1);
// const timesResult = calculater.times(addResult, 10)
// const divResult = calculater.div(timesResult, minResult);
// const powerResult = calculater.power(divResult, minResult);

// * prompt();라는 함수는 사용자에게 창을 띄어 값을 받음. (오랜된 방식 요즘에는 안씀)
// * typeof 키워드를 쓰면 type를 볼 수 있음 - typeof xxxxxxx
// * parseInt() - string --> number로 변환해주는 함수
// prompt();를 사용하면 답을 할때까지 코드의 실행을 멈추고, 매우 오래된 방법임. 별로 안이쁨. css로 바꾸지도 못함.
// const age = prompt("how old are you?");
// console.log(typeof age);
// prompt();에서 숫자를 입력해도 string이라고 뜬다. *string이 디폴트이기 때문이다.
// 한 type로 받아서 다른 type로 바꾸는 작업을 해야한다. "15"-->15
// console.log(typeof "15", typeof parseInt("15")); --> string number
// 이렇게 숫자로 변환이 되야 비교를 할 수 있다.
// 참고로 "숫자"가 아닌게 입력되면 변환이 안됨. NaN(not a number)

// - 예제 -
// const age = prompt("How old are you?")
// console.log(age);
// console.log(typeof age, typeof parseInt(age));
// console.log(age, parseInt(age));

// const age = parseInt(prompt("How old are you?"));
// console.log(age);



// ---------------------------------- //WELCOME TO JAVASCRIPT ----------------------------------




