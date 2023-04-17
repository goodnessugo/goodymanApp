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
    </Routes>
   </BrowserRouter>
  )
}

export default App
