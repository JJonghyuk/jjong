// "Object.hasOwn" --> object가 property를 가지고 있는지 확인한다.

const user = {
  name: "종혁",
  isAdmin: true,
};

console.log(user.hasOwnProperty("isAdmin"));
// 예전 방식으로 object 안에 property가 있는지 확인
// --> true

console.log(Object.hasOwn(user, "isAdmin"));
// es22 방식으로 object, property가 있는지 확인
// --> true

console.log("isAdmin" in user);
// 이 방법도 가능
// --> true
