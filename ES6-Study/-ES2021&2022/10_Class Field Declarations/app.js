// Class 의 Field 선언문 class 의 속성을 초기화 할때 constructor 안에 말고 밖에 선언 해도 된다.

class Counter {
  count = 0; // 필드

  // constructor() {
  //   this.count = 0;
  // }

  // 메소드
  plus() {
    this.count++;
  }
}

const userCounter = new Counter();

userCounter.plus();

console.log(userCounter.count);
