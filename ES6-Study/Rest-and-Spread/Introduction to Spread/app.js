// spread는 변수를 가져가서 풀어 해치는거(unpack) / 확장 시키는거
// rest는 하나의 변수로 축소 해주는거 -> array를 만든다.
// --> parameter 부분에 ... 들어가면 rest 이다

const friends = [1, 2, 3, 4];

console.log(friends);
console.log(...friends);

const family = ["a", "b", "c"];

console.log([friends, family]);
console.log([friends + family]);
console.log([...friends, ...family]);
// ...friends, ...family 배열의 값을 풀어서 하나의 배열안에 넣을 수 있다.

const sexy = {
  name: "nico",
  age: 24,
};

const hello = {
  sexy: true,
  hello: "hello",
};

console.log({ sexy, hello });
console.log({ ...sexy, ...hello });
// ...sexy, ...hello 오브젝트 값을 풀어서 하나의 오브젝트 안에 넣을 수 있다.
