// spread는 변수를 가져가서 풀어 해치는거(unpack) / 확장 시키는거
// rest는 하나의 변수로 축소 해주는거 -> array를 만든다.
// --> parameter 부분에 ... 들어가면 rest 이다

const infiniteArgs = (...kimchi) => console.log(kimchi);

infiniteArgs("1", 2, true, "lalala");

//
const bestFriendMaker = (firstone, ...rest) =>
  console.log(`mybestfriend is ${firstone}`);
// firstone = "nico"

bestFriendMaker("nico", "lynn", "dall");

//
const hello = {
  sexy: true,
  hello: "hello",
};
const helloMan = ({ ...item }) => console.log(item);

helloMan(hello);
