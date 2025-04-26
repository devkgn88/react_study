import './App.css';
import Viewer from './component/Viewer';
import Controller from './component/Controller';

const App = () => {
  return(
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <Viewer/>
      </section>
      <section>
        <Controller/>
      </section>
    </div>
  );
}

export default App;
