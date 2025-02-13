// class --> 청사진 같은 도면이라고 생각하면됨.
// object의 공장

// constructor는 객체(object)를 생성할 때 호출되는 특수한 메서드
// 클래스에서 객체를 만들 때 초기값을 설정하는 역할을 한다.
// ex)
class Person {
  constructor(name, age) {
    this.name = name; // this는 생성되는 객체를 가리킴
    this.age = age;
  }

  sayHello() {
    console.log(`안녕하세요! 저는 ${this.name}입니다.`);
  }
}

const user = new Person("철수", 25);
console.log(user.name); // "철수"
console.log(user.age); // 25
user.sayHello(); // "안녕하세요! 저는 철수입니다."

//
class User {
  constructor() {
    this.username = "Nicolas";
  }
  sayHello() {
    console.log("Hello");
  }
}

const sexyUser = new User();
const uglyUser = new User();

sexyUser.sayHello();
uglyUser.sayHello();

const baseObject = {
  username: "nicolas",
  sayHi: function () {
    console.log("hi nicolas");
  },
};

const sexyBase = baseObject;
const uglyBase = baseObject;

sexyBase.sayHi();
uglyBase.sayHi();

class SayName {
  constructor(name) {
    this.name = name;
  }
  SayNamefunc() {
    console.log(`My name is ${this.name}`);
  }
}

const callFunc = new SayName("Joey");
callFunc.SayNamefunc();
