import React from 'react';
import Navbar from '../DashComp/Navbar';
import Sidebar from '../DashComp/Sidebar';
import Searchbar from '../DashComp/Searchbar'

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Sidebar/>
      <Searchbar/>
    </div>
  )
}

export default Dashboard
