import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import "./App.css"

function App() {
  return (
    <div>
      {/* <nav>
        <ul>
        </ul>
      </nav> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
