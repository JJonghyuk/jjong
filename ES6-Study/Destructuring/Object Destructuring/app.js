const settings = {
  notifications: {
    follow: true,
    alerts: true,
    unfolow: false,
  },
  color: {
    theme: "dark",
  },
};

const {  notifications: { follow = false },  color = {},} = settings;
// settings 의 notifications 안에 들어가 follow를 찾으며, notifications안에 color를 찾는 다는 문법이다
// 여기서 기본값을 설정 할 수 있는데 follow = false 를 사용하여 follow가 없을 경우 false로 기본값이 출력 됨
// notifications: { follow = false } = {} -> 이렇게 작성 하지 않을시에는 notifications라는 object가 없다면 undefined라고 출력 됨, 그래서 = {} 를 붙여 줌으로써 notifications가 없더라도 follow 기본 값이 출력됨

console.log(color);
console.log(follow);
