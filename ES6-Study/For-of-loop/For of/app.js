// for of 는 array, string, NodeLists(getElementsByClassName과 같은 함수 결과물), Typed Array, Map, Set 로 반복이 가능하다.
// 루프를 시작하다가 중간에 멈출 수 있다. (forEach 문은 멈출 수 없다.)
const friends = ["nico", "lynn", "ha", "hu"];

for (let i = 0; i < friends.length; i++) {
  console.log(`i love my friend ${friends[i]}`);
}

//
const addHeart = (c, i, a) => console.log(c, i, a);

friends.forEach(addHeart);

friends.forEach((friend) => console.log(friend));

//
for (const friendfor of friends) {
  console.log(friendfor);
}

for (const freindletter of "Hello") {
  // -> string으로 반복 하는 방법
  console.log(freindletter);
}

for (const friendstop of friends) {
  if (friendstop === "ha") {
    break; // --> 루프 멈추는 방법
  } else {
    console.log(friendstop);
  }
}
