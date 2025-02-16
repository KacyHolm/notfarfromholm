import logo from './logo.svg';
import './App.css';
import Navbar from './mainComponents/Navbar';
import Anna from './personalPages/anna/Anna';
import Chris from './personalPages/chris/Chris';
import Kacy from './personalPages/kacy/Kacy';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
        <Navbar>
          <Routes>
            <Route path="/anna" element={<Anna />} />
            <Route path="/chris" element={<Chris />} />
            <Route path="/kacy" element={<Kacy />} />
          </Routes>
        </Navbar>
        </Router>
        
        <p>
          Hello World
        </p>
      </header>
    </div>
  );
}

export default App;
