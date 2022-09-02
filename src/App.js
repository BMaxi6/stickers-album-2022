import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home } from './screens/Home';
import { Obtained } from './screens/Obtained';
import { Missing } from './screens/Missing';
import { Header } from './components/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/obtained" element={<Obtained />} />
          <Route path="/missing" element={<Missing />} />
      </Routes>
    </div>
  );
}

export default App;
