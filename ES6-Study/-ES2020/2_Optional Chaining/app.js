// 어떤 object가 예상한 것을 (API 등이) 가지고 있는지 아닌지 확신할 수 없을 때 사용한다.

const dummy = {
  name: {
    first: "park",
  },
  age: 15,
};

console.log(dummy.name.first);
// first 가 없어서 오류가 남
console.log(dummy.name && dummy.name.first);
// name이 있고 name.first가 있을 경우 name.first 를 출력하는건데 first가 없을 경우 undefined가 뜬다

// ***
console.log(dummy?.name?.first);
// ? 를 사용하여 선언시에 && 를 사용하지 않고도, name이 있고 name.first가 있을 경우 name.first 를 출력하는건데 first가 없을 경우 undefined가 뜨게금 사용 할수 있다.
// 소스 간략화
