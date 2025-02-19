import './App.css';
import Navbar from './components/Navbar';
import Anna from './personalPages/anna/Anna';
import Chris from './personalPages/chris/Chris';
import Kacy from './personalPages/kacy/Kacy';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router";
import Main from './components/Main';

function App() {
  return (
    <div>
      <header className="App-header">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/anna-holm" element={<Anna />} />
            <Route path="/christopher-holm" element={<Chris />} />
            <Route path="/kacy-holm" element={<Kacy />} />
          </Routes>
        </Router>

      </header>
    </div>
  );
}

export default App;
