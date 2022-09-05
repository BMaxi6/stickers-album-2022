import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home } from './screens/Home';
import { Obtained } from './screens/Obtained';
import { Missing } from './screens/Missing';
import { Header } from './components/Header';
import { Provider } from 'react-redux';
import store from './store'
import { Dashboard } from './screens/Dashboard';

function App() {

  return (
    <Provider store={store}>
      <Header></Header>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/obtained" element={<Obtained />} />
          <Route path="/missing" element={<Missing />} />
          <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Provider>
  );
}

export default App;
