import React from 'react'
import MyProfilePhoto from './Component/Profile/ProfilePhoto';
import MyAddress from './Component/Profile/Address';
import MyFullName from './Component/Profile/FullName';


import './App.css';


function App() {
  return (
    <div className="App">
    
      <div className="content">
      <MyProfilePhoto />
      <MyFullName />
      <MyAddress />
      </div>
      
      
    </div>
  );
}

export default App;
