import './App.css';
import Dashboard from './pages/Dashboard';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Dashboard/>}/>
          <Route exact path='/signin' element={<Signin/>}/>
          <Route exact path='/signup' element={<Signup/>}/>
        </Routes>
      </Router>
    );
}

export default App;
