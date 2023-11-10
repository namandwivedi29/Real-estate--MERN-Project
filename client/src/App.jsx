import React from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Signin from "./Pages/Signin"
import Signup from "./Pages/Signup"
import Profile from "./Pages/Profile"
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/signin" element={<Signin/>}/>
      <Route exact path="/signup" element={<Signup/>}/>
      <Route exact path="/profile" element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
  )
}