// new WeakSet() 의 특징 (set을 쓰지 이거는 안쓴다)
// - 객체(Object)만 저장 가능(기본형 값 string, number 등은 불가능)
// - 객체가 메모리에서 제거되면(garbage collection), 자동으로 WeakSet에서도 삭제됨
// - 반복(iteration) 불가능(예: .forEach(), for...of 사용 불가)
// - 크기(size) 확인 불가 (배열처럼 .size 없음)
const weakSet = new WeakSet();
const data = {
  im: true,
  yot: false,
};

weakSet.add(data);
console.log(weakSet);
