import './App.css';
import Dashboard from './pages/Dashboard';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Content from './pages/Content';
import axios from 'axios';
import {Toaster} from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

function App() {
    return (
      
      <Router >
        <Toaster position='top-right' toastOptions={{duration: 2000}}/>
        <Routes>
          <Route exact path='/device' element={<Dashboard/>}/>
          <Route exact path='/signin' element={<Signin/>}/>
          <Route exact path='/signup' element={<Signup/>}/>
          <Route exact path='/profile' element={<Profile/>}/>
          <Route exact path='/content' element={<Content/>}/>
          <Route path="/" element={<Navigate to="/signin" />} />
        </Routes>
      </Router>
      
    );
}

export default App;
