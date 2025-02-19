// "cause" --> 에러 객체의 속성으로, 오류의 원인을 담을 수 있는 기능

try {
  2 + 2;
  throw new Error("DB에 연결 하지 못했습니다.", {
    cause: {
      error: "비밀번호가 틀립니다.",
      value: 1234,
      message: ["짧습니다", "숫자만 입력해주세요."],
    },
  });
} catch (e) {
  console.log(e.cause);
}
