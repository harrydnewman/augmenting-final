import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Graph from './pages/Graph';
import BotFillerPage from './pages/BotFillerPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/graph' element={<Graph/>}/>
          <Route path='/test' element={<BotFillerPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
