// ||(or) 은 0을 false 로 판단하여 변수값이 선언 되어 있음에도 0을 false로 보고 다른 값을 출력한다.
// ex)
// let name = 0
// console.log("hello", name || "anonymous"); --> 출력값: "hello", "anonymous"

// ?? 연산자는 null 이거나 undefined, 빈문자열, 숫자 0 을 true로 보고, 그때에만 출력 된다
let name = 0;
console.log("hello", name ?? "anonymous");
// "hello", 0 --> 이렇게 출력 된다
