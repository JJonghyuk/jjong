// ??= (Logical Nullish Assignment)은 null 이거나 undefined 인 경우에만 확인한다.

const user = {
  username: "솔이",
  password: 123,
  isAdmin: null,
};

user.isAdmin ??= true;

console.log(user);
// --> {username: '솔이', password: 123, isAdmin: true}
