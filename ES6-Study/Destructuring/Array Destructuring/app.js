const days = ["Mon", "Tue", "Wed"];

const [one, two, three, four = "Thu"] = days;

// 배열에서는 배열의 순서대로 값을 가져옴으로 변수명을 다르게 해도 days 배열의 순서대로 값을 가져온다.
// 배열 안의 값이 없고, 새로운 기본값을 넣고 싶고자 할때 four = "Thu" 이런식으로 작성 가능하다.

// const days = () => ["Mon", "Tue", "Wed"];
// const [one, two, three, four = "Thu"] = days();
// 변수가 아닌 함수를 사용하여 선언 할때에도 맞찬가지이다.

console.log(one, two, three, four);
