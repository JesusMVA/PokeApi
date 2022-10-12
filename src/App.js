import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Characters from './pages/Characters'
import CharacterDetail from './pages/CharacterDetail'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Characters' element={<Characters/>}></Route>
      <Route path='/Characters/:url' element={<CharacterDetail/>}></Route>
    </Routes>
  );
}

export default App;
