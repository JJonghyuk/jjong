// 뭔가를 추가하거나, 합치거나 업데이트 하는 방법
// -> spread는 변수를 가져가서 풀어 해치는거(unpack) / 확장 시키는거
const friends = ["nico", "lynn"];
const newFriends = [...friends, "joey"];

console.log(newFriends);

//
const objectnico = {
  username: "nico",
};

console.log({ ...objectnico, password: 123 });

//
const first = ["mon", "tue", "wed"];
const weekend = ["sat", "sun"];
const fullweek = [...first, "thu", "fri", ...weekend];

console.log(fullweek);

//
const lastName = prompt("Last name : ");
const user = {
  username: "nico",
  age: 24,
  // lastName: lastName !== "" ? lastName : undefined,
  ...(lastName !== "" && { lastName }),
};

console.log(user);
