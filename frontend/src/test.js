import logo from './logo.svg';
import './App.css';
import {Component} from "react";

const list = [
  {
    "id": 1,
    "title": "Learn HTTP",
    "body": "HTTP and REST"
  },
  {
    "id": 2,
    "title": "Second item",
    "body": "second item"
  },
  {
    "id": 3,
    "title": "1st todo",
    "body": "1st application todo"
  }
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { list };
  }
  render() {
    return (
      <div>
        {this.state.list.map(item => (
            <div key={item.id}>
              <h1>{item.title}</h1>
              <p>{item.body}</p>
            </div>
        ))}
      </div>
    );
  }
}

export default App;


import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
