import './App.css';
import Dashboard from './pages/Dashboard';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Content from './pages/Content';
import Videos from './pages/Videos';
import Schedule from './pages/Schedule';
import Newschedule from './pages/Newschedule';
import axios from 'axios';
import {Toaster} from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Contentadmin from './pages/Contentadmin';
import Admindash from './pages/Admindash';

axios.defaults.baseURL = process.env.frontend_origin
axios.defaults.withCredentials = true

function App() {
    return (
      
      <Router >
        <Toaster position='top-right' toastOptions={{duration: 2000}}/>
        <Routes>
          <Route exact path='/device' element={<Dashboard/>}/>
          <Route  path='/signin' element={<Signin/>}/>
          <Route  path='/signup' element={<Signup/>}/>
          <Route  path='/profile' element={<Profile/>}/>
          <Route  path='/content' element={<Content/>}/>
          <Route  path='/loop' element={<Videos/>}/>
          <Route  path='/Schedule' element={<Schedule/>}/>
          <Route path='/Schedule/new' element={<Newschedule/>}/>
          <Route exact path='/admin/content' element={<Contentadmin/>}/>
          <Route exact path='/admin' element={<Admindash/>}/>
          <Route path="/" element={<Navigate to="/signin" />} />
        </Routes>
      </Router>
      
    );
}

export default App;
