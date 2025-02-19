// &&= (Logical AND assignment) -- 변수가 truthy 일 때, 즉 문자열, 배열, 객체, true 등등 일때 정한 value 값으로 대체 된다.
// &&= : 변수의 value가 truthy라면 변수를 수정함

const user = {
  username: "nico",
  password: 123,
};

user.password &&= "[secret]";
user.name &&= "솔이"; // name 이라는 키 네임이 없어서 실행 안된다
user.lastName ||= "유"; // lastName 키 네임이 없음으로 falsy 이므로 실행 된다.

console.log(user);
