// import React from "react";

// const Body = () => {
//     return(
//         <React.Fragment>
//         <div>div 1</div>
//         <div>div 2</div>
//         </React.Fragment>
//     );
// }
// export default Body;

// import React from "react";
// import "./Body.css"

// const Body = (props) => {
    // const num = 19;
    // return(
    //     <>
    //         <h2>
    //             {num}은(는) {num%2 === 0 ? "짝수":"홀수"}입니다.
    //         </h2>
    //     </>
    // );

    // const num = 200;
    // if(num % 2 === 0){
    //     return <div>{num}은(는) 짝수입니다</div>
    // } else {
    //     return <div>{num}은(는) 홀수입니다</div>
    // }

    // return(
    //     <div style={{ backgroundColor:"gold",color:"skyblue"}}>
    //         <h1>body</h1>
    //     </div>
    // );

    // return(
    //     <div className="body">
    //         <h1>바디</h1>
    //     </div>
    // );

    // console.log(props);
    // return(
    //     <div className="body">{props.name}는 {props.location}에 거주중입니다</div>
    // );
    // const {name, location} = props;
    // console.log(name, location);
    // return (
    //     <div className="body">{name}는 {location}에 거주중입니다</div>
    // );
// }


// const Body = ({ name, location, favorList=[]}) => {
//     console.log(name, location);
//     return (
//       <div className="body">
//         {name}은 {location}에 거주합니다
//         <br/>
//         {favorList.length}개의 음식을 좋아합니다.
//       </div>
//     );
//   };

// const Body = ({ children }) =>{
//     console.log(children);
//     return <div className="body">{children}</div>
// }

// const Body = () => {
//     const handleOnClick = () => {
//         alert('버튼을 클릭하셨군요!');
//     }
//     return (
//         <div className="body">
//             <button onClick={handleOnClick}>
//                 클릭하세요!!
//             </button>
//         </div>
//     );
// }

// const Body = () => {
//     const handleOnClick = (e) => {
//         console.log(e);
//         console.log(e.target.name);
//     }
//     return (
//         <div className="body">
//             <button name="A버튼" onClick={handleOnClick}>
//                 A버튼
//             </button>
//             <br/>
//             <button name="B버튼" onClick={handleOnClick}>
//                 B버튼
//             </button>
//         </div>
//     );
// }

// import { useState } from "react";

// const Body = () => {
//     console.log('Update!!');
//     const [count, setCount] = useState(0);
//     const onIncrease = () => {
//         setCount(count + 1);
//     };
//     return (
//         <div>
//             <h2>{count}</h2>
//             <button onClick={onIncrease}>+</button>
//         </div>
//     );
// }

// import { useState } from 'react';
// const Body = () => {
//     const handleOnChange = (e) => {
//       console.log(e.target.value);  
//     };
//     return (
//         <div>
//             <input onChange={handleOnChange}/>
//         </div>
//     );
// }

// import { useState } from 'react';

// const Body = () => {
//     const [text, setText] = useState("");
//     const handleOnChange = (e) => {
//         setText(e.target.value);
//     }
//     return (
//         <div>
//             <input value={text} onChange={handleOnChange}/>
//             <div>{text}</div>
//         </div>
//     );
// }

// import { useState } from 'react';

// const Body = () => {
//     const [date, setDate] = useState("");
//     const handleOnChange = (e) => {
//         console.log('변경된 값 : ', e.target.value);
//         setDate(e.target.value);
//     };
//     return (
//         <div>
//             <input type="date" value={date} onChange={handleOnChange}/>
//         </div>
//     );
// }

// import { useState } from 'react';

// const Body = () => {
//     const [option, setOption] = useState("");
//     const handleOnChange = (e) => {
//         console.log("변경된 값 : ",e.target.value);
//         setOption(e.target.value);
//     };
//     return (
//         <div>
//             <select value={option} onChange={handleOnChange}>
//                 <option key={"1번"} valu="1">1번</option>
//                 <option key={"2번"} value="2">2번</option>
//                 <option key={"3번"} value="3">3번</option>
//             </select>
//         </div>
//     );
// }

// import { useState } from 'react';

// const Body = () => {
//     const [name, setName] = useState("");
//     const [gender, setGender] = useState("");
//     const [birth, setBirth] = useState("");
//     const [bio, setBio] = useState("");

//     const onChangeName = (e) => {
//         setName(e.target.value);
//     }

//     const onChangeGender = (e) => {
//         setGender(e.target.value);
//     }

//     const onChangeBirth = (e) => {
//         setBirth(e.target.value);
//     }

//     const onChangeBio = (e) => {
//         setBio(e.target.value);
//     };

//     return (
//         <div>
//             <div>
//                 <input value={name} onChange={onChangeName} placeholder="이름"/>
//             </div>
//             <div>
//                 <select value={gender} onChange={onChangeGender}>
//                     <option key={""}></option>
//                     <option key={"남성"}>남성</option>
//                     <option key={"여성"}>여성</option>
//                 </select>
//             </div>
//             <div>
//                 <input type="date" value={birth} onChange={onChangeBirth}/>
//             </div>
//             <div>
//                 <textarea value={bio} onChange={onChangeBio}></textarea>
//             </div>
//         </div>
//     );

// }

// import { useState } from 'react';

// const Body = () => {
//     const [state, setState] = useState({
//         name:"",
//         gender:"",
//         birth:"",
//         bio:"",
//     })
//     const handleOnChange = (e) => {
//         console.log("현재 수정 대상 : ",e.target.name);
//         console.log("수정값 : ",e.target.value);
//         setState({
//             ...state,
//             [e.target.name]:e.target.value,
//         })
//     }
//     return(
//         <div>
//             <div>
//                 <input
//                     name="name"
//                     value={state.name}
//                     onChange={handleOnChange}
//                     placeholder="이름"
//                 />
//             </div>
//             <div>
//                 <select name="gender" value={state.gender}
//                     onChange={handleOnChange}>
//                     <option key={""}></option>
//                     <option key={"남성"}>남성</option>
//                     <option key={"여성"}>여성</option>
//                 </select>
//             </div>
//             <div>
//                 <input
//                     name="birth"
//                     type="date"
//                     value={state.birth}
//                     onChange={handleOnChange}
//                 />
//             </div>
//             <div>
//                 <textarea name="bio" value={state.bio}
//                     onChange={handleOnChange}></textarea>
//             </div>
//         </div>
//     );
// }
 

// import "./Body.css";
// import { useState } from 'react';

// const Viewer = ({number}) => {
//     return (
//         <div>
//             <h3>
//             {number % 2 === 0 ? "짝수" : "홀수"}
//             </h3>
//         </div>
//     );
// }
// const Body = () => {
//     const [number, setNumber] = useState(0);
//     const onIncrease = () => {
//         setNumber(number+1);
//     };
//     const onDecrease = () => {
//         setNumber(number-1);
//     };
//     return (
//         <div>
//             <h2>{number}</h2>
//             <Viewer number={number}/>
//             <div>
//                 <button onClick={onDecrease}>-</button>
//                 <button onClick={onIncrease}>+</button>
//             </div>
//         </div>
//     );

// }

// import { useState } from "react";

// const Viewer = () => {
//     console.log("viewer component update!");
//     return (
//         <div>Viewer</div>
//     );
// }

// const Body = () => {
//     const [number,setNumber] = useState(0);
//     const onIncrease = () => {
//         setNumber(number+1);
//     };
//     const onDecrease = () => {
//         setNumber(number-1);
//     };
//     return (
//         <div>
//             <h2>{number}</h2>
//             <Viewer number={number}/>
//             <div>
//                 <button onClick={onDecrease}>-</button>
//                 <button onClick={onIncrease}>+</button>
//             </div>
//         </div>
//     );    

// }

// import {useState} from 'react';

// const Body = () => {
//     const [text, setText] = useState("");
//     const handleOnChange = (e)=>{
//         setText(e.target.value);
//     }
//     const handleOnClick = (e) =>{
//         alert(text);
//     }
//     return (
//         <div>
//             <input value={text}
//             onChange={handleOnChange}/>
//             <button
//             onClick={handleOnClick}
//             >작성완료</button>
//         </div>
//     );
// }

// export default Body;

import { useRef, useState } from 'react';

const Body = () => {
    const [text, setText] = useState("");
    const textRef = useRef();

    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    const handleOnClick = () => {
        // alert(text);
        // textRef.current.value = ""
        if(text.length < 5){
            alert("5자보다 길게 입력하세요!!");
            textRef.current.focus();
        } else{
            alert(text);
            setText("");
        }
    }

    return(
        <div>
            <input
            ref={textRef}
            value={text}
            onChange={handleOnChange}
            />
            <button onClick={handleOnClick}>
                작성 완료
            </button>
        </div>
    );
}
export default Body;