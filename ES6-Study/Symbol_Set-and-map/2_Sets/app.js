// set을 사용하면 어떤 타입의 고유한 value든 저장할 수 있게 해준다.(유니크한것 저장, 중복 x)
// value 하나 또는 배열로 가능하다
// ex)
// const user = {
//  key --> age : 12 <-- value 저장
// }
const user = new Set([1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 6, 7, 8]);
// 중복된 값을 제외한 1,2,3,4,6,7,8 만 나온다.
console.log(user);
