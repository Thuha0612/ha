import logo from './logo.svg';
import './App.css';
import MyForm from './MyForm';
import Uncontrolled from './UnControlled';
import LoginForm from './LoginForm';

function App() {
  return (
    <div className="App">
      <MyForm/>
      <br/>
      <Uncontrolled/>
      <br/>
      <br/>
      <LoginForm/>
    </div>
  );
}

export default App;
