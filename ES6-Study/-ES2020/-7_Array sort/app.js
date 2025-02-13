// sort()
// - 배열을 정렬 해주는 기능
// - 배열값(원본)을 변경 시킴,
// - [10, 2, 4, 8] ❌ (숫자가 아니라 문자 기준(유니코드) 정렬됨)

// 비교 함수로는 첫번째(a), 두번째(b) 인자를 사용 할 수 있다.
// * a < b, a - b 오름차순(음수)
// * a > b, b - a 내림차순(양수)
// * a, b 가 같다 ( a === b ) --> x
// sort((a, b) => a.localeCompare(b) --> localeCompare 대소문자 구분 없이 정렬

const number = [1, 5, 3, 2, 4];
const numberSort = (sortA, sortB) => {
  return sortB - sortA; // b - a 내림차순(양수)
  return sortA - sortB; // a - b 오름차순(음수)
};

console.log(number.sort());
// [1,2,3,4,5]
console.log(number.sort(numberSort));
// [5, 4, 3, 2, 1] - 내림차순

const string = ["apple", "strawberry", "avocado"];
const stringSort = (sortA, sortB) => {
  return sortA.length - sortB.length; // a - b 오름차순(음수)
  return sortB.length - sortA.length; // b - a 내림차순(양수)
};

console.log(string.sort());
// ['apple', 'avocado', 'strawberry']
console.log(string.sort(stringSort));
// ['apple', 'avocado', 'strawberry'] - 오름차순

// 객체 배열 정렬
const profile = [
  {
    name: "jonghyuk",
    age: 18,
  },
  {
    name: "hana",
    age: 12,
  },
];

const profileSort = (sortA, sortB) => {
  return sortA.age - sortB.age; // a - b 오름차순(음수)
};

console.log(profile.sort(profileSort));
// {name: 'hana', age: 12}
// {name: 'jonghyuk', age: 18} - 오름차순
