import './App.css';
import Navbar from './components/Navbar';
import Anna from './personalPages/anna/Anna';
import Chris from './personalPages/chris/Chris';
import Kacy from './personalPages/kacy/Kacy';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router";
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <Router>
          <nav>
            <Link to="/">notfarfromholm</Link>
          </nav>
        <Navbar />
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/anna-holm" element={<Anna />} />
            <Route path="/christopher-holm" element={<Chris />} />
            <Route path="/kacy-holm" element={<Kacy />} />
          </Routes>
        </Router>
        </div>
      </header>
    </div>
  );
}

export default App;
