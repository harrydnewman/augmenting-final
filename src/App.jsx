import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Graph from './pages/Graph';
import BotFillerPage from './pages/BotFillerPage';
import About from './pages/About';
import Compare from './pages/Compare';
import InformationPage from './pages/InformationPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/compare' element={<Compare/>}/>
          <Route path='/information' element={<InformationPage/>}/>
          <Route path='/graph' element={<Graph/>}/>
          <Route path='/test' element={<BotFillerPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
