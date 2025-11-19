import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Show from './Show';
import Navbar from './Navbar';
import Add from './Add';

function App() {
  return (
<BrowserRouter>
<Navbar/>
<Routes>
  <Route Component={Home} path='/'/>
  <Route Component={Show} path='/show'></Route>
  <Route Component={Add} path='/add'></Route>
</Routes>
</BrowserRouter>
  );
}

export default App;
