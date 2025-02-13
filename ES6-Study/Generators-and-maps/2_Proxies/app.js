// new Proxy() --> filter라고 생각하면 됨
// proxy는 두개의 인자를 취함, 1개는 target(filter하고 싶은 Object), 다른 한개는 handler 이다, object인데 target의 필터
// 객체에 대한 **행동을 가로채고 조작할 수 있도록 해주는 래퍼(wrapper)
// Proxy에서 특정 동작을 가로채는 메서드들을 트랩(Trap)
// has,get,set 등 trap이라고 부른다. trap은 proxy 부분으로 handler에서 생성
// 이벤트를 가로채서 그게 따른 이벤트를 다르게 진행 하게 해줄 수 있음
// ex) target의 오브젝트를 지웠을 경우 정해진 값으로 변경할 수 있게 할 수 있다.

// Proxies
// : 라이브러리 ( 개발자 : 개발자 ) 관점으로 사람들이 내 object 를 변경하는 것을 막고 싶을때 사용

// Generators
// : pause 가 필요할 때 등 사용
// (Redux saga 라이브러리에서 Generators 를 사용하고 있다.)

const target = {
  username: "jong",
  age: 10,
  password: 1234,
};

const targetFilter = {
  get: (target, prop, receiver) => {
    // target -> object, prop -> property data(object의 키 네임) , receiver -> proxy object
    return prop === "password" ? `${"*".repeat(5)}` : target[prop];
  },
  set: () => {
    console.log("Set 핸들러");
  },
  deleteProperty: (target, prop) => {
    if (prop === "password") {
      return;
    } else {
      target[prop] = "DELETED";
    }
  },
};

const filteredUser = new Proxy(target, targetFilter);
// target --> 원본 객체, targetFilter --> 동작을 가로채는 메소드
