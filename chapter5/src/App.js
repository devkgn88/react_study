import './App.css';
import Header from './component/Header';
import Body from './component/Body';
import Footer from './component/Footer';

// function App() {
  // return (
  //   <div className="App">
  //     <Header/>
  //     <Body/>
  //     <Footer/>
  //   </div>
  // );

  // const name="김철수";
  // const location="동작구"
  // return (
  //   <div className='App'>
  //     <Header/>
  //     <Body name={name} location={location}/>
  //     <Footer/>
  //   </div>
  // );

//   const BodyProps = {
//     name:'김철수',
//     location:'동작구',
//     //favorList:['낑깡이','빵','떡볶이']
//   }
//   return (
//     <div className='App'>
//       <Header/>
//       <Body {...BodyProps}/>
//       <Footer/>
//     </div>
//   ); 
// }

const ChilComp = () => {
  return (
    <div>자식 컴포넌트</div>
  );
}

const App = () => {
  return (
    <div className='App'>
      <Header/>
      <Body>
        <ChilComp/>
      </Body>
      <Footer/>
    </div>
  );
}

export default App;
