import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Show from './Show';
import Navbar from './Navbar';

function App() {
  return (
<BrowserRouter>
<Navbar/>
<Routes>
  <Route Component={Home} path='/'/>
  <Route Component={Show} path='/show'></Route>
  <Route Component={Show} path='/add'></Route>
</Routes>
</BrowserRouter>
  );
}

export default App;
