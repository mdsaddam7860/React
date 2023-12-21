<>
<Router>
  <Navbar
    title="TextUtils"
    aboutText="About Us"
    mode={mode}
    toggleMode={toggleMode}
  />
  <Alerts alert={alert} />

  <div className="container my-3">
    <switch>
      <Route path="/about">
          <About/>
      </Route>
      <Route path="/">
      <TextForm showAlert={showAlert} heading="Enter your text to analyze below" mode={mode}/>
      </Route>
      
    </switch>
  </div>
</Router>
</>