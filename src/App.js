import './App.css';
import Dashboard from './pages/Dashboard';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Content from './pages/Content';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
      <Router>
        <Routes>
          <Route exact path='/device' element={<Dashboard/>}/>
          <Route exact path='/signin' element={<Signin/>}/>
          <Route exact path='/signup' element={<Signup/>}/>
          <Route exact path='/profile' element={<Profile/>}/>
          <Route exact path='/content' element={<Content/>}/>
        </Routes>
      </Router>
    );
}

export default App;
