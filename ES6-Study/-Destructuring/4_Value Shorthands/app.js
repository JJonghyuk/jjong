const follow = checkFollow();
const alert = checkAlert();

const settings = {
  notifications: {
    follow,
    alert,
  },
};
// follow : follow -> 라고 되어 있는 걸를 follow 하나로 단축하여 사용 할 수 있다.
// isFollow : follow 라고 변수명을 바꿔서 사용 할 수 도 있지만, 같은 단어로 단축할때는 follow 하나만 사용 가능
