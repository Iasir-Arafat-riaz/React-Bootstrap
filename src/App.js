import logo from './logo.svg';
import './App.css';
import { Button, Card } from "react-bootstrap"
import News from './components/News/News';
import Header from './components/Header/Header';
import TopHeadline from './components/TopHeadline/TopHeadline';

function App() {
  return (
    <div className="App">
      <h1>React bootsTrap</h1>
      <Header></Header>
      <TopHeadline></TopHeadline>
      
      <p>add</p>
    </div>
  );
}

export default App;
