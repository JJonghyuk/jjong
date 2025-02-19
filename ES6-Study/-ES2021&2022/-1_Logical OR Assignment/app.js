// ||=(logical or assignment)는, 변수가 falsy 일때 변수에 value 값을 넣을 수 있게 해준다.
// *falsy --> 비어있느 텍스트, undefined, null, false, 0, NaN 인거를 나타낸다
// ||= : 변수가 falsy 일 때 변수에 value를 넣을 수 있게 해줌
// ex)

let name = prompt("이름이 뭐죠?");
// if (!name) {
// name = "anonymous";
// } --> if문과 아래와 같다.
name ||= "솔이 falsy";

console.log(name);
