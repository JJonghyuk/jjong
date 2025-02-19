// replaceAll() --> 해당된 string을 변환 한다. (본래 변수를 변화 시키지는 않는다.)
// 새로운 string으로 반환(return) 해준다.
// ex) const newReplace = replace("o","good")
// 새롭게 변수를 지정 해줘야 한다.

const name = "고양이 솔이 냥냥이";

const newName = name.replaceAll("이", "😺");

console.log(name + " /", newName);
