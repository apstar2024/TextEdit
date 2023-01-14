// import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextBox from './Components/TextBox';
import React,{useState} from 'react'
import Alert from './Components/Alert';
// import PropsTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  //we can use components again
  const [mode,setMode]=useState('light');
  const [Alertmsg,setAlertmsg]=useState(null);
  
  const showAlert=(message,type)=>{
    setAlertmsg({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlertmsg(null)
    },2000)
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#505254';
      document.body.style.color='white'
      showAlert('Dark Mode Has Been Enabled :',"success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      document.body.style.color='black'
    }
  }
  return (<>
  <Router>
    <Navbar title='EditText' About="AboutEditor" mode={mode} toggleMode={toggleMode}/>
    <Alert Alertmsg={Alertmsg}/>
    {/* <TextBox mode={mode} Alertfun={showAlert}/> */}
    <Routes>
      {<Route path="/" element={<TextBox mode={mode} Alertfun={showAlert}/>} />}
      <Route path="/About" element={<About/>}/>
    </Routes>
    {/* <Navbar/> */}
    {/* <About/> */} 
  </Router>
   </>
  );
}

export default App;
