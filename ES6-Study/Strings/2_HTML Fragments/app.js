const wrapper = document.querySelector(".wrapper");

const addWelcome = () => {
  const div = `
    <div class="hello">
      <h1 class="title">Hello</h1>
    </div>
  `;
  // backtick(백틱)은 변수를 ${}와 텍스트를 같이 담아서 쓸수 있으며, Enter(줄바꿈)도 가능하게 만들어짐
  wrapper.innerHTML = div;
};

setTimeout(addWelcome, 20);
