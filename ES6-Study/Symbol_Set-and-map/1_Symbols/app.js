// Symbols 는 새로운 Data Type, 고유한 Data Type 이다.(유니크)
// Symbol() 은 value 가 아니고 description을 가지고 있다.
const hello = Symbol("hello");
const bye = Symbol("hello");

console.log(hello === bye); //둘의 desc은 갖지만 false가 나온다

const exData = {
  jjong: {
    age: 12,
  },
  jjong: {
    age: 12,
  },
};
console.log(exData); // jjong 값이 하나만 나온다
console.log(Object.keys(exData)); // key 값이 나온다. (jjong)

// 심볼 사용시 다른점
const exData2 = {
  [Symbol("jjong")]: {
    age: 12,
  },
  [Symbol("jjong")]: {
    age: 12,
  },
};

console.log(exData2); // jjong 2개의 값이 나온다(심볼은 변경되지 않으며 유니크하다)
console.log(Object.keys(exData2)); // key 값이 나오지 않는다. []
console.log(Object.getOwnPropertySymbols(exData2)); // 이 명령어 사용시 심볼 값이 나온다. (이걸로 인해서 프라이빗 하지 않음)

// 아래 처럼 하면, Symbol 값을 구할 수 있다.
const s = Object.getOwnPropertySymbols(exData2);
s.forEach((symbol) => console.log(exData2[symbol]));
