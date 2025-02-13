// addEventListener가 등록되어있는 event target이 this가 된다
// 일반 함수에서의 this는 현재 실행 컨텍스트 기준 가장 가까운 상위 object 타입 레퍼런스를 갖게 되어서, 어떻게 호출하냐에 따라 바뀌지만, arrow function을 사용하면 상위 스코프의 this를 상속받게 되어 고정된 값으로 사용할 수 있다.
// (arrow function을 사용하지 않고 고정된 this값을 사용하고 싶으면 .bind()를 사용하여 this가 가리킬 object를 설정할 수 있다.)
// ex)
// increase() --> 버튼 클릭시 이벤트 발생하며 this는 이벤트 발생하는 버튼으로 object가 잡힌다.
// increase = () => {} --> arrow 함수 사용시 상위 클래스를 고정으로 this가 고정된다.

//ex) (bind 사용 예시)
// addEventListener() {
//   this.plusBtn.addEventListener("click", this.increase.bind(this));  ---> bind 사용
//   this.minusBtn.addEventListener("click", this.decrease.bind(this));
// }
//   increase() {
//   this.count += 1;
//   this.repaintCount();
// }
//   decrease() {
//   this.count += -1;
//   this.repaintCount();
// }
//   repaintCount() {
//   this.counter.innerText = this.count;
// }

class Counter {
  constructor({ initialNumber = 0, counterId, plusId, minusId }) {
    this.count = initialNumber;
    this.counter = document.getElementById(counterId);
    this.counter.innerText = initialNumber;
    this.plusBtn = document.getElementById(plusId);
    this.minusBtn = document.getElementById(minusId);
    this.addEventListeners();
  }
  addEventListeners = () => {
    this.plusBtn.addEventListener("click", this.increase);
    this.minusBtn.addEventListener("click", this.decrease);
  };
  increase = () => {
    this.count = this.count + 1;
    this.repaintCount();
  };
  decrease = () => {
    this.count = this.count - 1;
    this.repaintCount();
  };
  repaintCount = () => {
    this.counter.innerText = this.count;
  };
}

new Counter({ counterId: "count", plusId: "add", minusId: "minus" });
new Counter({
  counterId: "count2",
  plusId: "add2",
  minusId: "minus2",
  initialNumber: 10,
});
