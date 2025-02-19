// "at()" --> 배열에서 인덱스로 찾고자 하는걸 찾아낸다.
// ex) array.at(2) 와 array[2] 와 같다. 하지만 배열 끝에서 부터 찾는거는 다르다
// array.at(-1) 라고 할시에 배열의 제일 마지막을 가져온다. array[-1] 이거는 undefined 라고 나온다.

const arr = ["a", "b", "c", "d"];

console.log(arr.at(0));
// --> "a"  0 부터 시작. ex) 0, 1, 2, 3...

console.log(arr.at(-1));
// --> "d"  -1 부터 뒤에서 부터 시작한다. ex) -1, -2, -3...
