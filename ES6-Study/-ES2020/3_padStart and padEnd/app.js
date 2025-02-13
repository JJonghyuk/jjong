// padStart,padEnd 는 문자열에 Padding을 넣는거다
// padStart --> 앞으로 추가 / padEnd --> 뒤로 추가 --> 기본 값을 변화시키지 않는다.(값을 반환(리턴)하는거)
// padStart(5,"ex") --> 문자열에(String) 메소드 사용가능 / 첫번째 인자는 길이를 뜻한다 / 두번째는 추가할 단어
// ex) 5개의 문자 / 5개의 문자 길이가 아니라면 "ex"을 반복해서 5개의 길이가 되게 맞춰 추가한다
console.log("5".padStart(5, "exo"));
// --> 값 - "exoe5"

console.log("5".padEnd(5, "exo"));
// --> 값 - "5exoe"

console.log("2".padStart(2, "0").padEnd(3, "s"));
// --> 값 - "02s"
