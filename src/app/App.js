import React from "react";
import {Routes, Route} from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Customer from "../pages/Customer";


function App() {
  return (
      <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/customer' element={<Customer/>}/>

          <Route path="*" element={<NotFound/>}/>
      </Routes>

  );
}

export default App;
