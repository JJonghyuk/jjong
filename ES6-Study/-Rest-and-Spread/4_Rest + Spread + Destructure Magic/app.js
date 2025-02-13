const user = {
  name: "nico",
  age: 24,
  password: 12345,
};
user["password"] = null;

console.log(user);

//
const killPasword = ({ password, ...rest }) => rest; // ({age, ...rest}) -> {} object를 열어서 원하는것을 골라서 가져온것 Destructure(비구조화) 을 사용한것
// (Destructure는 객체나 배열과 같은 복합 데이터를 개별적인 요소로 분리하는 과정을 의미합니다.)
const cleanUser = killPasword(user);

console.log(cleanUser);

//
const killage = ({ age, ...rest }) => rest; // ({age, ...rest}) -> {} object를 열어서 원하는것을 골라서 가져온것 Destructure(비구조화) 을 사용한것
// (Destructure는 객체나 배열과 같은 복합 데이터를 개별적인 요소로 분리하는 과정을 의미합니다.)
const cleanuser = killage(user);

console.log(cleanuser);

//
const setCountry = ({ country = "KR", ...rest }) => ({ country, ...rest });
// country 기본값을 지정하여 추가함
console.log(setCountry(user));

//
const rename = ({ name: newname, ...rest }) => ({ newname, ...rest });
// name이라는 키 네임을 -> newname 으로 변경함
console.log(rename(user));
