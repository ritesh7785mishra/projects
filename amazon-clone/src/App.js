import React from "react"
import './App.css';
import Header from "./Header.js"
import Home from "./Home.js"
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Checkout from './Checkout';

function App() {
  return (
    // following BEM convention of classNames
    <Router>
      <div className="app">
      <Header/>
        <Routes>
          <Route exact path="/login" element ={
            <h1>Login page</h1>
          }></Route>
          <Route exact path="/"element={
            <>
            <Home/>
            </>
            }
          />
          <Route exact path="/checkout"element={
            <>
            <Checkout/>
            </>
            }
          />
         
        </Routes>
        
      </div>
    </Router>
 
  );
}

export default App;
