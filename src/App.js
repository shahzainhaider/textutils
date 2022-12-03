import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import React, {useState} from 'react'
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Route,
//   // Link,
//   Routes
// } from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light')
  const [alert, setalert] = useState(null)


  const showalert=(message,type)=>{
      setalert({
        mesg:message,
        type:type
      })
      setTimeout(() => {
        setalert(null)
      }, 1500);
  }

  const toggle=()=>{
    if(mode=== 'light'){
      setMode('dark')
      document.body.style.backgroundColor='#041927'
      showalert('darkMode is enabled','success')
      document.title='TextUtils-dark Mode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showalert('darkMode is disabled','success')
      document.title='TextUtils-light Mode'
    }
  }
  return (
    <>
      {/* <Router> */}
    <Navbar mode={mode} toggle={toggle}/>
    <Alert alert={alert}/>
    <TextForm mode={mode} showalert={showalert}/>
    <div>
        {/* <Routes> */}
          {/* <Route exact path="/" element={<TextForm mode={mode} showalert={showalert}/>}/> */}
          {/* <Route exact path="/about" element={<About mode={mode}/>}/> */}
        {/* </Routes> */}
    </div>
      {/* </Router> */}
    </>
  );
}

export default App;
