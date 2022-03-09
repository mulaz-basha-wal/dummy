import logo from './logo.svg';
import './App.css';
import Dummy1 from './Dummy1';
import Dummy2 from './Dummy2';

function App() {
    return (
        <div className="App">
            <Dummy2 />
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
            <Dummy1 />
        </div>
    );
}

export default App;
