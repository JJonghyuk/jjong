// ----------------------------- #2 [Update] The Basics of React -----------------------------

// # 2.2
// 암기할 필요 없다. 이해하기
// 리액트를 import했기 때문에 createElement function을 가진 리액트 object에 접근 가능
// const span 그러나 createElement(“span”) 은 반드시 생성하고자 하는 HTML 태그와 똑같아야함

// React JS - 어플리케이션이 아주 인터랙티브하도록 만들어주는 library. 엔진과 같다.
// React-dom - library 또는 package. 모든 react element들을 HTML body에 둘 수 있도록 해줌.
// ReactDOM.render() - render의 의미는 react element를 가지고 HTML로 만들어 배치한다는 것. 즉, 사용자에게 보여준다는 의미
// ReactDOM.render(span, span이 가야할 위치)
// -> 그래서 보통 body에 id=“root” 만들어서 span을 root 안에 두라고 함

// React.createElement("span", {span의 property}, “span의 내용”)
// -> property는 class name, id도 가능 style도 가능
// -> 참고만 하고 외우지 말기. 이렇게 쓸 일 없음

// 바닐라JS는 HTML -> JS 순서
// 리액트는 JS -> HTML 순서

// JS가 element를 생성하고 React JS가 그것을 HTML로 번역하는 것
// React JS는 업데이트 해야 하는 HTML을 업데이트 할 수 있음

// # 2.3
// 두 가지 const를 render 하고 싶은 경우 div를 만든다
// 그리고 React.createElement("div", null, [span, btn]); 와 같이 배열을 만들어서 const를 넣어준다.

// property에 eventListener 넣는 것도 가능.
// 클릭 - {onClick: () => console.log("I'm clicked")}
// 마우스엔터 - {onMouseEnter: () => console.log("mouse enter")}

// # 2.5
// JSX – 자바스크립트를 확장한 문법
// 보통의 HTML과 비슷. 그러나 property를 HTML 태그의 속성처럼 적으면 됨
// const Title = (
// console.log("mouse enter")}>
// Hello I'm a span

// );
// style={{ backgroundColor: "tomato" }} -> 스타일은 {} 2개임
// JSX를 브라우저가 온전히 이해하지 못하므로 이해할 수 있게
// https://unpkg.com/@babel/standalone/babel.min.js 를 설치해야함
// -> JSX로 적은 코드를 브라우저가 이해할 수 있는 형태로 바꿔줌
// 바벨을 가져온 뒤 script type="text/babel"로 적어줘야 인식함

// style={{
//   backgroundColor: "orange",
//   }}에서 중괄호가 두 개인 이유:
//   첫 번째 중괄호 쌍 { }: 이것은 JSX 문법에서 JavaScript 표현식을 삽입할 때 사용합니다. React 컴포넌트에서 JavaScript 코드를 직접 사용하기 위해 필요합니다.
//   두 번째 중괄호 쌍 { }: 이것은 JavaScript 객체 리터럴을 나타냅니다. style 속성은 CSS 속성들을 포함하는 JavaScript 객체를 값으로 받습니다.
  
//   따라서 전체적으로 {{}} 형태가 되는 것입니다.
//   만약 중괄호를 하나만 사용하면, React는 이를 단순한 JavaScript 표현식으로 해석하려고 하지만, 실제로는 객체를 정의하고 있기 때문에 문법 오류가 발생합니다.
//   올바른 형식은 이렇습니다:
//   jsxCopystyle={{backgroundColor: "orange"}}
//   이는 다음과 같이 해석됩니다:
  
//   바깥쪽 { }: JSX에서 JavaScript를 사용하기 위한 구문
//   안쪽 { }: JavaScript 객체 리터럴
  
//   이 방식으로 React 컴포넌트에 인라인 스타일을 적용할 수 있습니다.
//   -claude-

// # 2.6
// div에 const 넣기 위해선
// 1. const를 함수로 만들어 줘야함 const Btn = () => ( );
// -> arrow function 이라고 부름
// = () => ( ); 는 / function Btn() { return ( ); } 와 같음 -> return 을 꼭 해줘야 함.

// 값을 반환할 때: () => ( 값 ) // --> return 을 자동으로 해줌
// 객체를 반환할 때: () => ({ 객체 }) // --> return 을 자동으로 해줌
// 아무것도 반환하지 않을 때: () => {}

// 2. HTML 태그처럼 만들어서 넣어줌
// 3. (중요) 컴포넌트의 첫 글자는 반드시 대문자여야 함
// -> 우리가 직접 만든 요소는 전부 대문자로 시작해야 함


// ----------------------------- //#2 [Update] The Basics of React -----------------------------

// ----------------------------- #3 [Update] State -----------------------------

// # 3.0
// 리액트가 아닌 경우, 일반 자바스크립트를 쓴 브라우저는 노드정보가 바뀔때마다 노드트리를 처음부터 다시 생성한대요 5단계에 걸쳐서. 근데 리액트는 가상돔을 써서 우리 시야에 보이는 부분만 수정해서 보여주고 모든 업뎃이 끝나면 일괄로 합쳐서 실제 돔에 던져준다고합니다! 이거 면접때 많이 물어보는거래요. 브라우저 작동원리와 연관있음. 니꼬쌤이 말하는 “렌더”가, 렌더트리를 말씀하시는 것 같은데 프엔은 이 렌더트리 단계를 얼마나 최적화하는가가 중요하다더라구요!


// # 3.1
// 리액트JS에서 데이터를 저장시켜 자동으로 리렌더링을 일으킬 수 있는 방법
// const data = React.useState();를 console.log 시키면
// [undefined, f ] -> undefined와 함수가 적힌 배열이 나타남
// undefined는 data이고 f는 data를 바꿀 때 사용하는 함수
// React.useState() 함수는 초기값을 설정할 수 있음
// 즉, undefined는 초기값이고 두 번째 요소인 f는 그 값을 바꾸는 함수

// 배열을 꺼내기
// const x = [1, 2, 3]
// const [a, b, c] = x;
// 으로 꺼낼 수 있음


// # 3.2

// React.useState() 배열에서
// 보통 데이터에는 counter처럼 원하는대로 붙이고
// f는 set 뒤에 데이터 이름을 붙임 (setCounter)
// 어떤값을 부여하던 setCounter 함수는 그 값으로 업데이트하고 리렌더링 일으킴
// 1. counter라는 데이터를 받음
// 2. return()에 그 데이터를 담고 있음 (리턴은 사용자가 보게될 컴포넌트)
// 3. 버튼이 클릭되면 counter값을 바꿔줄 함수 호출 -> setCounter
// 4. counter의 새로운 값을 가지고 counter 함수를 호출
// 5. 그 새로운 값은 setCounter(counter + 1)에 써준 counter + 1


// # 3.3
// const [counter, setCounter] = React.useState(); 에서
// React.useState() 는 react기능을 쓸 수있게 해주는 하나의 도구이고,
// counter은 현재의 값 state 이며,
// setCounter은 이벤트 발생시 변화를 주는 부분이어서 이후 counter로 다시 저장된다.

// React.js는 똑똑한 기능을 가지고 있기 때문에 매번 자동으로 바뀌는 리렌더링해준다.
// 하지만! 그냥 똑똑한게 아니라 엄청 똑똑하기 때문에 '실제로 바뀌는 값'만 판단해서 불필요한 리렌더링을 제외한 채로 동작한다!!!

// # 3.4
// state를 세팅하는 데는 2가지 방법이 있다. (2번째 방법이 안전하다)
// 1) 직접 할당 :setState(state +1)
// 2)함수를 할당:setState(state => state +1) (함수의 첫번째 인자는 현재 state 이다)

// 현재 state랑 관련이 없는 값을 새로운 state로 하고싶은 경우에는 (1),
// 현재 state에 조금의 변화를 주어서 새로운 state를 주고 싶은 경우에는 (2)

// # 3.5
// react, reactdom을 import하는 script tag에서
// production - > development 로 변경하는데
// production은 배포 모드, development는 개발 모드를 의미합니다.
// 개발모드는 니코쌤이 보여준 것 처럼 버그로 이어질 수 있는 요소들을 미리 경고하는 검증 코드가 포함되어 있습니다.

// 참고 : https://ui.toast.com/weekly-pick/ko_20191212


// # 3.6
// - input에 value={minutes} 넣는 이유는 외부에서도 value 값을 수정 하기 위해서

// # 3.7
// flip
// const onFlip = () => setFlipped(!flipped);
// -> flipped가 true라면 부정명제인 !flipped는 false
// -> false라면 true

// state값으로 input을 enabled할지 disabled 할지를 결정할 수 있음

// 디폴트 값이 false 라고 정했으므로 Hours는 disabled 되어야함
// 그래서 disabled={flipped === false}를 써줘서
// flipped가 false라면, disabled는 true가 되도록 만들어줌
// Minuets에는 반대로
// disabled={flipped === true}라고 써줌
// 그러나
// Hours는
// disabled={!flipped}
// Minuets에는 반대로
// disabled={flipped}
// 주는게 더 짧고 좋음

// 시간 -> 분 컨버터
// 삼항연산자(ternary operator) 사용하기
// flipped ? amount : amount / 60
// -> 만약 flipped 상태면 state에 있는 값을 그대로 보여주기
// 아니라면 60으로 나눈 변환된 값 보여주기
// value={flipped ? amount * 60 : amount}
// -> 만약 flipped 상태면 60으로 곱한 변환된 값 보여주기
// 아니라면 state에 있는 값을 그대로 보여주기

// flip누르면 변화된 값 그대로 가져오므로
// onFlip 변수에 reset(); 넣어주기


// # 3.8


// # 3.9


// ----------------------------- //#3 [Update] State -----------------------------


// -----------------------------  -----------------------------

// # 1.1


// ----------------------------- // -----------------------------


// -----------------------------  -----------------------------

// # 1.1


// ----------------------------- // -----------------------------


// -----------------------------  -----------------------------

// # 1.1


// ----------------------------- // -----------------------------


// -----------------------------  -----------------------------

// # 1.1


// ----------------------------- // -----------------------------


// -----------------------------  -----------------------------

// # 1.1


// ----------------------------- // -----------------------------


// -----------------------------  -----------------------------

// # 1.1


// ----------------------------- // -----------------------------


// -----------------------------  -----------------------------

// # 1.1


// ----------------------------- // -----------------------------


// -----------------------------  -----------------------------

// # 1.1


// ----------------------------- // -----------------------------



