import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from './compnents/MyNavbar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Page404 from './pages/Page404';
import Home from './pages/Home';
import "./css/App.css"

const App = () => {
  return  <>
<BrowserRouter>
<MyNavbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/signup' element={<SignUp/>}/>
  <Route path='*' element={<Page404/>}/>
</Routes>
</BrowserRouter>
  </>
}

export default App