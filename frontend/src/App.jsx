import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SubmitRecipe from './pages/SubmitRecipe'
import DeleteRecipe from './pages/DeleteRecipe'
import ShowRecipe from './pages/ShowRecipe'
import UserProfile from './pages/UserProfile'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/recipes/submit' element={<SubmitRecipe/>} />
      <Route path='/recipes/details/:id' element={<ShowRecipe/>} />
      <Route path='/recipes/delete/:id' element={<DeleteRecipe/>} />
      <Route path='/recipes/userProfile/:id' element={<UserProfile/>} />
      <Route path='/recipes/login' element={<LogIn/>} />
      <Route path='/recipes/Signup' element={<SignUp/>} />
    </Routes>
  )
}

export default App