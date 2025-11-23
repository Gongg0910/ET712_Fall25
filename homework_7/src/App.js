import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import FirstWeb from './first_web';
import SecondWeb from './second_web';
import ThirdWeb from './third_web';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">

        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Tiger</Link>
            </li>
            <li>
              <Link to="/second_web">Leopard</Link>
            </li>
            <li>
              <Link to="/third_web">Cat</Link>
            </li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<FirstWeb />} />
            <Route path="/second_web" element={<SecondWeb />} />
            <Route path="/third_web" element={<ThirdWeb />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}
export default App;