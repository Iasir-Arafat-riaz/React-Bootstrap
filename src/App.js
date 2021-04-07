import logo from './logo.svg';
import './App.css';
import { Button, Card } from "react-bootstrap"
import News from './components/News/News';

function App() {
  return (
    <div className="App">
      <h1>React bootsTrap</h1>
      <Button variant="success">Success</Button>
      <News></News>
    </div>
  );
}

export default App;
