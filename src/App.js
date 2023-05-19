import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'
import Signin from './pages/Signin'
import Forget from './pages/Forget'
import Verification from './pages/Verification'
import Newpassword from './pages/Newpassword'
import Passwordsuccessful from './pages/Passwordsuccessful'
import UserProfile from './pages/users/UserProfile'
import Html from './pages/users/Html'
import Content from './pages/users/Content'
import Css from './pages/users/Css'
import Javascript from './pages/users/Javascript'
import Tailwind from './pages/users/Tailwind'
import ReactContent from './pages/users/ReactContent'
import Git from './pages/users/Git'


const App = () => {
  return (
   <BrowserRouter>
    <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/create' element={ <Create /> } />
        <Route path='/signin' element={ <Signin /> } />
        <Route path='/forget' element={ <Forget /> } />
        <Route path='/verification' element={ <Verification /> } />
        <Route path='/newpassword' element={ <Newpassword /> } />
        <Route path='/passwordsuccessful' element={ <Passwordsuccessful /> } />
        <Route path='/userprofile' element={ <UserProfile /> } />
        <Route path='/html' element={ <Html /> } />
        <Route path='/content' element={ <Content /> } />
        <Route path='/css' element={ <Css /> } />
        <Route path='/javascript' element={ <Javascript /> } />
        <Route path='/tailwind' element={ <Tailwind /> } />
        <Route path='/git' element={ <Git /> } />
        <Route path='/reactcontent' element={ <ReactContent /> } />
    </Routes>
   </BrowserRouter>
  )
}

export default App
