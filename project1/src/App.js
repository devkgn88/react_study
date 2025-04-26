import './App.css';
import { useRef, useEffect, useState } from 'react';
import Viewer from './component/Viewer';
import Controller from './component/Controller';
import Even from './component/Even';

const App = () => {
  const [count, setCount] = useState(0);
  const [text,setText] = useState("");
  const handleSetCount = (value) => {
    setCount(count + value);
  };
  const handleChangeText = (e) =>{
    setText(e.target.value);
  };
  // 첫번째 랜더링 시점 제외
  // const didMountRef = useRef(false);
  // useEffect(() => {
  //   if(!didMountRef.current){
  //     didMountRef.current = true;
  //     return;
  //   } else{
  //     console.log('컴포넌트 업데이트');
  //   }
  // });

  // 첫번째 마운트 될때 동작
  // useEffect(() =>{
  //   console.log('컴포넌트 마운트');
  // },[]);

  // 클린업 사용하기
  // useEffect(()=>{
  //   const intervalID = setInterval(() =>{
  //     console.log("깜빡");
  //   },1000);
  //   return () => {
  //     console.log('클린업');
  //     clearInterval(intervalID);
  //   }
  // });
  return(
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <input value={text}
        onChange={handleChangeText}/>
      </section>
      <section>
        <Viewer count={count}/>
        {count % 2 === 0 && <Even/>}
      </section>
      <section>
        <Controller handleSetCount={handleSetCount}/>
      </section>
    </div>
  );
}

export default App;
