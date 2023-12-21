import React, { useState } from "react";
import { BrowserRouter,Route, Routes } from 'react-router-dom'


import "./App.css";
import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alerts from "./components/Alerts";

// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   Router,
//   RouterProvider,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#092958";
      showAlert("Dark Mode has been Enabled", "Success");
      document.title = "TextUtils Dark mode";
      // setInterval(() => {
      // document.title = "TextUtils is amazing";

      // }, 2000);
      // setInterval(() => {
      // document.title = "Install TextUtils Now";

      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled", "Success");
      document.title = "TextUtils Light mode";
    }
  }

  return (

  <>
  
  <BrowserRouter>
  <Navbar
    title="TextUtils"
    aboutText="About Us"
    mode={mode}
    toggleMode={toggleMode}/>
    <Alerts alert={alert} />
    <Routes>
        <Route exact path = "/" element={<TextForm showAlert={showAlert} heading="Enter your text to analyze below" mode={mode}/>}/>
        <Route exact path = "about" element={<About/>}/>
    </Routes>
  </BrowserRouter>

  </>


   
  );
}

export default App;




