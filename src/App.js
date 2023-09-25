import './App.css';
import { FcHome } from "react-icons/fc";
import Form from './components/From';


function App() {
  return (
    <div className="App container" style={{maxWidth:500, margin: "1rem auto"}}>
      <h1 className="display-1 my-5">
        {" "}
        <FcHome />Mortgage Calculator test</h1>

        <Form />
    </div>
  );
}

export default App;
