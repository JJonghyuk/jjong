// static 메소드와 필드는 class 그 자체에 붙어 있다.
// class의 인스턴스에서는 사용 불가 x, 클래 자차에서 호출해야 함
// ex)
// static hello(){
// }
// const ex = new counter();
// ex.hello() --> 사용 불가
// counter.hello() --> 사용 가능

class Counter {
  #count = 0; // 프라이빗 필드
  static description = "클래스로만 호출 할수 있는 정적 필드에요"; // 정적 필드
  static isMyChild(instance) {
    return instance instanceof Counter;
  }
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

console.log(Counter.isMyChild(userCounter));
