const DEFAULT = "text...";

const test = (name = "hi") => "Hello " + name;
//name = DEFAULT --> 변수르 넣어 기본 값을 지정 해 줄 수 있음
//name = "hi" --> 이런식의 직접 지정도 가능함

console.log(test());
