// *스크립트 사전*

// ---------------------------------- chrome-project ----------------------------------

// ---------------------------------- #2_WELCOME TO JAVASCRIPT ----------------------------------

// * 2 > integer
// * 1.5 > float
// * number(숫자,정수)
// * float(소수)
// * text(문자)
// * variables(변수) - 값을 저장 하거나 유지하는 역할.
// * string - 처음부터 끝까지 모두 글자로 이뤄져 있다.
// * boolean - true 또는 false
// * operation(연산)
// * constant(상수) / const - 바뀌지 않는 값.
// * let - 바꿀수 있는 값 (처음 선언 할때만 필요 하고 그 뒤에 값을 선언 할때는 let 안해도 됨)
// * camelCase(낙타 등 모양) 자바스크립트 - ex) myName 단어 별로 대문자를 사용.
// * snake_case(뱀 모양) 파이썬 - ex) my_name 단어 별로 _ 추가하여 사용
// * null - 자바스크립트에게 여기엔 값이'비어 있음'을 의미, 자연적으로 발생하지 않음
// * undefined - 어떤 variables(변수)이 메모리에 있지만 '값이 없음 or 정의 되지 않음'을 의미
// * NaN - Not a Number(숫자가 아님) 이라는 의미
// * alert - 알럿창을 호출

// * array(배열) - 하나의 variables(변수) 안에 데이터의 list를 가지는 것
//   const player = ["nico",10,true]
//   - days[2] = "water" // 데이라는 변수의 오브젝트 인덱스 2번인 "안녕하세요"를 "water"로 교체한다는 뜻.
//   - push() 함수는 array(배열) 안에 추가 하는 기능 [ays.push('생선') // days라는 변수에 '생선'이라는 string 값을 추가해준것.]
//   - object 만들기 / object 안에서는 = 를 사용 하지 않는다. : 를 사용하고 , 를 마지막에 붙인다.(property를 가진 데이터를 저장)
// *length - string의 갯수를 확인
// * 중요 *
// form을 submit하면 브라우저는 기본적으로 페이지를 새로고침 하도록 되어있다. << 우리가 원하는 것이 아님!
// preventDefault() 함수를 추가함으로써 브라우저의 기본 동작을 막을 수 있다!!

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
// const calculator = {
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
//     powerOf: function(a,b){
//         console.log(a ** b);
//     },
// }
// calculator.add(1,2);
// calculator.min(2,1);
// calculator.div(4,2);
// calculator.times(4,2);
// calculator.powerOf(4,2);

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
// const calculator = {
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
// const addResult = calculator.add(2,5);
// const minResult = calculator.min(addResult, 1);
// const timesResult = calculator.times(addResult, 10)
// const divResult = calculator.div(timesResult, minResult);
// const powerResult = calculator.power(divResult, minResult);

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

// * isNaN 은 무언가가 NaN인지 판별하는 방법 - 글자입력하면 true / 숫자입력하면 false
// *OR
// - true || true === true
// - false || true === true
// - true || false === true
// - false || false === false
// *AND
// - true && true === true
// - false && true === false
// - true && false === false
// - false && false === false

// - 예제 -
// const age = parseInt(prompt("How old are you?"));
// console.log(isNaN(age));

// if(isNaN(age) || age < 0){
//     console.log("Please write a real positive number");
// }else if(age < 18){
//     console.log("You are too young.");
// }else if(age >= 18 && age <= 50){
//     console.log("You can drink");
// }else if(age > 50 && age <= 80){
//     console.log("You should exercise");
// }else if(age === 100){
//     console.log("wow you are wise");
// }else if(age > 80){
//     console.log("You can do whatever you want.");
// }


// ---------------------------------- //#2_WELCOME TO JAVASCRIPT ----------------------------------

// ---------------------------------- #3_JAVASCRIPT ON THE BROWSER ----------------------------------

// * document - 브라우저에 이미 존재하는 object, 접근할 수 있는 HTML
// * console.dir()
//   - 괄호안에 document, title 등 넣으면 object 정보 보여줌
//   - console.dir(document) --> document 의 object를 자바스크립트 콘솔로 보여줌
// * document.title - html의 title 값을 가져옴.
// * document.title = "xxxxx" - "xxxxx"라고 타이틀 값을 수정할 수 있음.

// * getElementById("") - document.getElementById("") 괄호 안에는 string 들어감 (하나만 불러옴, 하위요소 못 가져옴)
// * getElementsByClassName() - 많은 element를 가져올때 씀(array를 반환)
// * getElementsByTagName() - name을 할당할 수 있음(array를 반환)
// * querySelector() - element를 CSS selector방식으로 검색할 수 있음 (ex. h1:first-child)
//   - 단 하나의 element를 return해줌
//   ⇒ hello란 class 내부에 있는 h1을 가지고 올 수 있다(id도 가능함)
//   - 첫번째 element만 가져옴
//   - querySelector("#hello); 와 getElementById("hello"); 는 같은 일을 하는 것임
//     하지만 후자는 하위요소 가져오는 것을 못하므로 전자만 쓸거다. ex) document.querySelector(".hellos h1")
//  * querySelectorAll() - h1이 들어있는 array를 가져다 줌

// - 예제 -
// const title = document.getElementById("title");
// title.innerText = "Got you!"

// console.log(title.id);
// console.log(title.className);

// - 예제 -
// const title = document.getElementsByTagName("h1");
// const title = document.querySelector(".hello h1");
// const title = document.querySelectorAll(".hello h1");

// console.dir(title)
// title.style.color = "blue";

// 기본적으로 object로 표시한 element를 보여줌(전부 js object임) 그 element 중 앞에 on이 붙은 것들은 event임
// * addEventListener() - event를 추가 하는 함수
// listen하고 싶은 event를 찾는 가장 좋은 방법은, 구글에 찾고 싶은 element의 이름, 예를들어 h1 html element mdn을 검색.
// 우리는 javascript의 element를 원하니, 링크에 Web APIs라는 문장이 포함된 페이지를 찾아. 왜냐면 이건 JS관점의 HTML Heading Element란 의미야.
// 너무 복잡하면 element를 console.dir로 출력해서 on~ 이라고 적혀있는걸 사용하면 됨.

// title.onMouseEnter = handleMouseEnter; / title.addEventListener(“mouseenter” , handleMouseEnter);
// 위에 두 코드는 동일하나 *addEventListener를 선호하는 이유는 *removeEventListener을 통해서 event listener을 제거할수있기 때문이다.
// document에서 body,head,title 은 중요해서 언제든 - ex) document.body 로 가져올수있지만
// div나 h1 등 element 들은 querySelector getElementById등으로 찾아야한다. - ex) document.querySelector(“h1”);
// window는 기본제공

// *className은 기존 클래스를 삭제하고 새로 넣는 함수라서 classList를 사용
// string을 반복하는 순간에는 cont(constant)를 생성하여 공통으로 작업
// *classList.toggle() 함수는 클래스가 있으면 빼고, 없으면 넣는 형식의 함수

// - 예제 -
// const title = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//     // title.style.color = "blue";

//     // const currentColor = title.style.color;
//     // let newColor;
//     // if(currentColor === "blue"){
//     //     newColor = "tomato";
//     // }else{
//     //     newColor = "blue";
//     // }
//     // title.style.color = newColor;

//     // const clickedClass = "clicked";
//     // if(title.classList.contains(clickedClass)){
//     //     title.classList.remove(clickedClass);
//     // }else{
//     //     title.classList.add(clickedClass);
//     // }

//     title.classList.toggle("clicked");
// }

// function handleMouseEnter(){
//     title.innerText = "Mouse is here!";
// }

// function handleMouseLeave(){
//     title.innerText = "Mouse is gone!";
// }

// function handleWindowOffline() {
//     alert('SOS No WIFI');
// }
    
// function handleWindowOnline() {
//     alert('ALL GOOD');
// }

// function handleWindowResize(){
//     document.body.style.backgroundColor = "tomato";
// }
// function handleWindowCopy(){
//     alert("copier");
// }

// title.addEventListener("click",handleTitleClick); // ***중요*** addEventListener 안에 있는 함수는 직접 실행()하지 않는다.
// title.addEventListener("mouseenter", handleMouseEnter);
// title.addEventListener("mouseleave", handleMouseLeave);

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);

// ex)
// const superEventHandler = {
//     'sayHello': () => {
//         console.log('Hello!');
//     },

//     'sayHi': () => {
//         console.log('Hi!');
//     },

//     'sayLikeThis': (text) => {
//         console.log(text);
//     },

//     someData: "Object는 key에 대한 value로 함수를 가질 수 있어요!"
// }


// ---------------------------------- //#3_JAVASCRIPT ON THE BROWSER ----------------------------------

// ---------------------------------- #4 LOGIN ----------------------------------

// function onLoginSubmit(event){ // *함수 실행시 event 첫번째 인자는 그에 대한 정보를 담고 있음
//     event.preventDefault(); // 브라우저가 기본 동작을 실행하지 못하게 막기 // event object는 preventDefault함수를 기본적으로 갖고 있음
//     console.log(event);
// }
// loginForm.addEventListener("submit", onLoginSubmit); // submit 이벤트가 발생한다면, onLoginSubmit함수를 실행시킨다는 의미 // JS는 onLoginSubmit함수 호출시 인자를 담아서 호출함. 해당 인자는 event object를 담은 정보들

// * 중요 *
// form 기본 동작은 submit이며, submit하면 브라우저는 기본적으로 페이지를 새로고침 하도록 되어있다. << 우리가 원하는 것이 아님!
// preventDefault() 함수를 추가함으로써 브라우저의 기본 동작을 막을 수 있다!!
// 이 preventDefault 함수는 EventListener 함수의 '첫 번째 argument' 안에 있는 함수이다. 첫 argument는 지금 막 벌어진 event들에 대한 정보를 갖고 있다.
// JS는(기본적으로)argument를 담아서 함수를 호출하는데, 이 argument가 기본 정보들을 제공하고 있다. ex) 누가 submit주체인지, 몇 시에 submit을 했는지 등등 콘솔에 출력해보면 알 수 있음

// ** addEventListener 안에 있는 함수는 직접 실행하지 않는다.
// 브라우저가 실행시켜주고
// 브라우저에서 해당 이벤트에 대한 정보 즉, object를(event information) 가지게 된다. ex) handleLinkClick({event information})
// addEventListener의 함수에서 object에 대한 자리만 할당해주면 해당 이벤트가 발생시킨 정보들에 대한 object들을 볼 수 있다!
// 이때 해당 이벤트가 가진 기본 Default값을 발생시키지 않기 하게 위해선 preventDefault를 이용하여 막을 수 있다!

// ``(백틱 기호), string과 변수를 함께 쓸려면 백틱기호 안에서 ${}를 사용하여 사용 ex) `Hello ${변수명}`
// const HIDDEN_CLASSNAME = 'hidden'; --> 관습: string만 포함된 변수는 대문자로 쓴다 + 중요한 변수가 아니라 서.

// * localStorage - 브라우저에 무언가를 저장한 후 나중에 가져 올 수 있음 / string 으로 저장됨 --> 배열로 저장 필요할 경우 JSON.stringify("value") 함수 사용
//   localStorage.setItem("key", "value"); --> 로컬 저장소에 해당 키와 값을 저장함.
//   localStorage.getItem("key");  --> 로컬 저장소에 해당 키에 해당되는 값을 불러옴.
//   localStorage.removeItem("key"); --> 로컬 저장소에 해당 키에 해당되는 키, 값을 삭제함.
     
//   - Cookie: 만료일자를 지정하게 되어 있어서 영구적이지 않습니다. 또한 용량 제한이 있습니다.
//   - Web storage: 크게 Local storage 와 Session storage 가 있습니다.
//   1. Local storage: 저장한 데이터를 직접 지우지 않는 한 데이터가 영구적으로 저장됩니다.
//   2. Session storage: 브라우저 종료 시 데이터가 사라집니다.

// ---------------------------------- //#4 LOGIN ----------------------------------


// ---------------------------------- #5 CLOCK ----------------------------------

// * setInterval(실행할 함수, 실행할 함수의 주기) --> interval = 매번 일어나야 하는 무언가!
//   - setInterval(start,100);
//   - setInterval(() => {}, 100);
// * setTimeout(실행할 함수, 실행할 함수의 주기) --> 정해진 시간에 한번만 실행하는 함수
// * new Date() --> 현재 날짜, 요일, 시간을 알수 있음
//   *- const newDate = new Date();
//   *- newDate.getHours(), getMinutes(), getSeconds(),getFullYear() --> 현재 시간, 분, 초, 4자리 연도 등등 가져 올수 있음.
// * String() - number --> string으로 변환 해주는 함수
// * padStart(단어 갯수,"없을시 대체할 단어"), padEnd() --> string으로 단어갯수를 지정하며(문자열에 적용 되어 사용 됨으로 string 함수를 이용하여 변환후 사용 하기도 함), 지정된 단어 갯수가 없을시에 보여지는 대체 단어를 만들수 있음

// ---------------------------------- //#5 CLOCK ----------------------------------


// ---------------------------------- #6 QUOTES AND BACKGROUND ----------------------------------

// * Math.random() - 0 이상 ~ 1 미만 랜덤의 숫자 호출
// * Math.ceil() - 소수점을 올리는 것(올림)
// * Math.round() - 소수점을 반올림
// * Math.floor() - 소수점을 버리는 것(버림)

// img.src = "src 속성을 추가"
// * document.createElement("태그 생성") - 태그를 생성
// * document.body.appendChild() - appendChild() --> 선택된 태그(클래스,아이디 등)안 맨 마지막 자식으로 추가됨

// ---------------------------------- //#6 QUOTES AND BACKGROUND ----------------------------------


// ---------------------------------- #7 TO DO LIST ----------------------------------

// append()로는 문자열도 추가가 가능한데, appendChild()로는 객체만 추가할 수 있다.
// li.append("추가해주세요") → (가능)
// li.appendChild("추가해주세요") → (불가능 - typeError)
// * event.target --> target은 클릭된 html element
// * JSON.stringify("value") --> JavaScript 값, array(배열/객체(object))를 JSON 형식의 문자열(string)로 변환
// * JSON.parse("value") --> JSON 문자열(string)을 JavaScript array(배열/객체(object))로 변환
//   - JSON.stringify로 array처럼 생긴 string으로 저장한 후 다시 JSON.parse 이용해 array로 꺼내는 방법
// * forEach() --> forEach(함수명) - 이렇게 함수명을 넣어서 실행 시킬수 있음 ex) forEach(ex) 실행시에 ex(item) --> ex 인자로 forEach 문의 item값이 적용되어 들어감
// * Date.now() - 1970년 1월 1일 0시 0분 0초부터 현재까지 경과된 밀리초(1000분의 1초)를 number 형식으로 나타내는 함수
// * filter("조건 값 or 함수") --> array에서 뭔가를 삭제할 때 실제로 array에서 지우는 게 아닌 지우고 싶은 item을 빼고 새 array를 만듦(item을 지우는 게 아닌 item을 제외하는 것)
//   - filter("조건 값 or 함수") --> array에서 콜백 함수의 true 인것만 잡아줌
//   - const newArr = arr.filter((item) => item > 2), arr.filter(item => item > 2) / 이렇게 변수에 담을 수 있으며, function 함수 만들어서 사용 안하고 filter 안에서 선언하여 사용 가능, 인자값은 아무거나 해도 상관 없음

// ---------------------------------- //#7 TO DO LIST ----------------------------------


// ---------------------------------- #8 WEATHER ----------------------------------

// navigator.geolocation.getCurrentPosition() 를 통해 현재 좌표를 구할수 있음
// - 첫번째는 조건이 완료 되었을때, 두번재는 에러가 났을때의 함수를 넣어줘야 한다.




// ---------------------------------- //#8 WEATHER ----------------------------------

// ---------------------------------- //chrome-project ----------------------------------

