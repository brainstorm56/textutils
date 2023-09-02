import React, { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
function App() {
  const [mode, SetMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {  setAlert(null);},
     2500);
  }
  const toggleMode = ()=>{
    if(mode==='light')
    {
      SetMode('dark')
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled","success");
    }
    else
    {
      SetMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Dark mode has been disabled","success")
    }
  }
  return (  
    <>
  <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode}/>
   <Alert alert = {alert}/>
  <div className="container my-3">
  <TextForm showAlert = {showAlert} heading="Enter the text to analyze" mode = {mode}/> 
  </div>
    </>
  );
} 
export default App;
