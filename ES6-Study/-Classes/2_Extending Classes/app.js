// this는 class 안에서 볼 수 있고, class 그 자체를 가르키는것
// properties(속성)은 객체(object)나 클래스에서 데이터를 저장하는 변수를 말한다.
// 객체가 가진 특징(상태)을 나타내는 값이라고 보면 된다.
// extends 는 extends는 클래스를 확장(상속)할 때 사용, 부모 클래스의 기능을 자식 클래스가 물려받을 때 사용한다.
// ex) class Admin extends User { }
class User {
  constructor(name, lastName, email, password) {
    this.username = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
  sayHello() {
    console.log(`안녕하세요. 나의 이름은 ${this.username}`);
  }
  getProfile() {
    console.log(`${this.username} ${this.email} ${this.password}`);
  }
  updatePassword(newPassword, currentPassword) {
    if (currentPassword === this.password) {
      this.password = newPassword;
    } else {
      console.log("비밀번호가 바뀌지 않았어요.");
    }
  }
}

const newUser = new User("종혁", "박종혁", "jjong@naver.com", 1234);

console.log(newUser.password);
newUser.updatePassword(200002, 1234);
console.log(newUser.password);

// extends 는 extends는 클래스를 확장(상속)할 때 사용, 부모 클래스의 기능을 자식 클래스가 물려받을 때 사용한다.
// ex) class Admin extends User { }
class Admin extends User {
  deleteWebsite() {
    console.log("Boom!");
  }
}

const adminSuper = new Admin("종혁", "박종혁", "jjong@naver.com", 1234);
adminSuper.deleteWebsite();
console.log(adminSuper.email);
