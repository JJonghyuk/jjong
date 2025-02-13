// generator 는 pause 할수 있는 함수
// generator를 사용 하기 위해서는 * 를 사용해야 하며 function* 이라고 표기한다
// generator 에서는 yield를 사용 하는데 return과 같다고 생각하면 된다.
// Proxies
// : 라이브러리 ( 개발자 : 개발자 ) 관점으로 사람들이 내 object 를 변경하는 것을 막고 싶을때 사용

// Generators
// : pause 가 필요할 때 등 사용
// (Redux saga 라이브러리에서 Generators 를 사용하고 있다.)

function* listPeople() {
  yield "jonghyck";
  yield "hana";
  yield "sole";
}

const start = listPeople(); // 실행 해봐도 아무것도 일어나지 않는다.

console.log(start.next()); // 첫번째 yield 가 실행 되며 object로 보여준다, 한번더 next()할 경우 그 다음 yield가 실행 된다.

const friends = ["hana", "jjong", "sole"];

function* starts() {
  for (const friend of friends) {
    yield friend;
  }
}

const looper = starts();
console.log(looper.next());
