// Swapping variables(변수 교환)
let mon = "Sat";
let sat = "Mon";

[sat, mon] = [mon, sat];
//[sat, mon] = ["Sat", "Mon"] 상태가 되는 것

console.log(mon, sat);

// skipping variables(변수 생략)
const days = ["mon", "tue", "wed", "thu", "fri"];
const [, , , four, five] = days;
// , 를 사용하여 변수를 생략 할 수 있다.
// console.log 값은 four = thu, five = fri

console.log(four, five);
