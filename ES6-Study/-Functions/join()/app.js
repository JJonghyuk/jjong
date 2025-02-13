const wrapper = document.querySelector(".wrapper");

const friends = ["me", "lynn", "dal", "mark"];

const list = `
  <h1>People i love</h1>
  <ul>
    ${friends.map((friend) => `<li>${friend} </li>`).join("")}
  </ul>
`;

wrapper.innerHTML = list;
// map()함수는 array(배열)이라서 , 가 노출 되기 때문에 join() 사용하여 , 를 지운다
// join() --> array(배열)의 모든 요소를 문자열로 결합하는 데 사용됩니다. 배열의 각 요소를 지정한 구분자(문자열)로 연결한 결과를 반환합니다.
// ex)
// const numbers = [1, 2, 3, 4];
// console.log(numbers.join(" - "));
// - 출력: "1 - 2 - 3 - 4"
// console.log(numbers.join(""));
// - 출력: "1234" (구분자 없이 연결)

// ** 주의 사항 **
// 배열 요소가 undefined, null, 빈 값이면 빈 문자열로 변환됩니다
// const arr = [1, null, undefined, 4];
// console.log(arr.join("-"));
// - 출력: "1--4"
// join()은 배열의 원본을 변경하지 않습니다. 불변성을 유지합니다.
