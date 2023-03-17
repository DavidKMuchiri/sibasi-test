import Login from './Components/Login/Login';
import Menu from './Components/Menu/Menu';
import ToDo from './Components/ToDo/ToDo';
import {Routes, Route} from 'react-router-dom';
import CardList from './Components/CardList/CardList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/dashboard' element={<Menu />}/>
        <Route path='/homepage' element={<ToDo />}/>
        <Route path='/cardpage' element={<CardList />}/>

      </Routes>
      {/* <CardList /> */}
    </div>
  );
}

export default App;
