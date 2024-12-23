// import Button from "./Button";
// import styles from "./App.module.css"
import { useState, useEffect } from "react";
function Hello(){
  useEffect(()=>{
    console.log("하이");
    return () => console.log("바이")
  })
  return <h1>Hello</h1>;
}

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, keywordValue] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => keywordValue(event.target.value)
  const [test, testValue] = useState(false);
  const onClick2 = () => testValue((prev) => !prev)
  useEffect(() => {
    console.log("[] 없으면 한번 실행")
  }, [])
  useEffect(() => {
    console.log("키운터가 추가 될때 실행 됩니다.")
  }, [counter])
  useEffect(() => {
    console.log("검색 내용이 추가 될때 실행 됩니다.",)
  }, [keyword])
  useEffect(() => {
    console.log("카운터 & 검색 내용이 추가 될때 실행 됩니다.")
  }, [counter, keyword])

  return (
    <div>
      <input type="text" placeholder="검색 할 내용 적어주세요." onChange={onChange}/>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
      {test ? <Hello/> : null}
      <button onClick={onClick2}>{test ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
