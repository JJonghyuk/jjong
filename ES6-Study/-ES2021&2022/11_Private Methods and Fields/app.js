// 변수 앞에 "#" 을 붙이면 그 클래스에서만 사용 가능한(private) 만들 수 있다.
// private 메소드와 필드를 쓰는 이유는 class를 보호하기 위해서
// class 내부에서만 사용 가능하게끔(외부에서 사용 x)
// "get" 을 사용할 경우 이 메소드는 값을 반환할 거라는걸 알려주게 된다.
// ex)
// get이 있을 경우 --> userCounter.count 라고 한다 (실행문 x) / 없을 경우에는 userCounter.count() 라고 실행문을 나오게 한다

class Counter {
  #count = 0; // 프라이빗 필드
  get count() {
    return this.#count;
  }
  // 인스턴스 메소드
  plus() {
    if (this.#count === 5) {
      this.#reset();
    } else {
      this.#count++;
    }
  }
  // 프라이빗 메소드
  #reset() {
    this.#count = 0;
  }
}

const userCounter = new Counter();

userCounter.plus();
userCounter.plus();
userCounter.plus();
userCounter.plus();
userCounter.plus(); // 4에서 실행 되기 때문에 5 라는 숫자가 나온다.

// userCounter.#reset(); --> "#" 사용시에 외부에서 사용이 안된다

console.log(userCounter.count); // count 값이 전혀 private하지 않다 --> public (접근이 가능하다.)이라 한다.
