(() => {
  // 필요한 HTML 요소들을 변수로 가져옵니다.
  // 화면에 숫자를 표시할 입력창 (input)
  const resultInput = document.querySelector("#result");
  // 숫자 버튼들 (0-9)
  const numberBtn = document.querySelectorAll(".number");
  // 연산자 버튼들 (+, -, *, /)
  const operatorBtn = document.querySelectorAll(".operator");
  // 등호 버튼 (=)
  const equalBtn = document.querySelector(".equal");
  // 지우기 버튼 (C)
  const clearBtn = document.querySelector(".clear");

  // 현재 계산할 식을 저장할 변수를 만듭니다. (초기값은 빈 문자열)
  let currentExpression = "";

  // 숫자 버튼들을 반복문으로 돌면서 각각에 클릭 이벤트를 추가합니다.
  // (힌트: document.querySelectorAll('.number') 등을 사용)
  // 각 버튼을 클릭하면
  // 버튼의 텍스트(숫자)를 가져와
  // 현재 식에 추가하고
  // 입력창에 표시합니다.
  numberBtn.forEach((e) => {
    e.addEventListener("click", () => {
      const number = e.textContent;
      currentExpression += number;
      resultInput.value = currentExpression;
    });
  });

  // 연산자 버튼들에 클릭 이벤트를 추가합니다.
  // 각 버튼을 클릭하면
  // 버튼의 텍스트(연산자)를 가져와
  // 현재 식에 추가하고
  // 입력창에 표시합니다.
  operatorBtn.forEach((e) => {
    e.addEventListener("click", () => {
      const operator = e.textContent;
      const lastChar = currentExpression.slice(-1);
      const currentExpressionCheck = Array.from(operatorBtn).some(
        (i) => i.textContent === lastChar,
      );
      if (currentExpressionCheck) {
        currentExpression = currentExpression.slice(0, -1);
        currentExpression += operator;
      } else {
        currentExpression += operator;
      }
      resultInput.value = currentExpression;
    });
  });

  // '지우기' 버튼에 클릭 이벤트를 추가합니다.
  // 버튼을 클릭하면
  // 현재 식을 빈 문자열로 초기화하고
  // 입력창도 비웁니다.
  const clearEvent = () => {
    currentExpression = "";
    resultInput.value = "";
  };
  clearBtn.addEventListener("click", clearEvent);

  // '등호' 버튼에 클릭 이벤트를 추가합니다.
  // 버튼을 클릭하면
  // 현재 식을 계산합니다. (힌트: eval() 함수 사용)
  // 계산 결과를 입력창에 표시합니다.

  const resultEvent = () => {
    const result = eval(currentExpression);
    resultInput.value = result;
    currentExpression = String(result);
  };
  equalBtn.addEventListener("click", resultEvent);
})();
