import './App.css';
import Navbar from './components/Navbar';
import Anna from './personalPages/anna/Anna';
import Chris from './personalPages/chris/Chris';
import Kacy from './personalPages/kacy/Kacy';
import Josiah from './personalPages/josiah/Josiah';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router";
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='background'>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/main" element={<Main />} />
              <Route path="/anna-holm" element={<Anna />} />
              <Route path="/christopher-holm" element={<Chris />} />
              <Route path="/kacy-holm" element={<Kacy />} />
              <Route path="/josiah-nunn" element={<Josiah />} />
            </Routes>
          </Router>
        </div>
      </header>
    </div>
  );
}

export default App;
