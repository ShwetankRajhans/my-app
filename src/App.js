import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TestForm from './components/TestForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

const showAlert = (message, type) => {
 setAlert({
  msg: message,
  type : type
 })
 setTimeout(() => {
  setAlert(null);
 }, 3000);
}

const removeBodyClass = ()=> {
  document.body.classList.remove('bg-light');
  document.body.classList.remove('bg-dark');
  document.body.classList.remove('bg-success');
  document.body.classList.remove('bg-danger');
  document.body.classList.remove('bg-primary');
  document.body.classList.remove('bg-warning');

}

const toggleMode = (cls) => {
  removeBodyClass();
  document.body.classList.add('bg-'+cls);
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='blue';
    showAlert("Dark mode has been enabled", "success");
    document.title = "TextUtils - Dark mode";
  }else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled", "success");  
    document.title = "TextUtils - Light mode";
  }
}

  return (
    <>
    <Router>
    <Navbar title = "TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
    <Routes>
          <Route exact path="/about"  element={<About />} />
          <Route exact path="/" element={<TestForm showAlert={showAlert} mode={mode} heading="Enter your text to analyze below"/>} />
    </Routes>
    </div>
    </Router>
    </>
    
  );
}

export default App;

