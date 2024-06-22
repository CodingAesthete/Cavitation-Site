import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Goals from './pages/Goals';
import Contacts from './pages/Contacts';
import LearnMore from './pages/LearnMore';
import Header from './components/Header';
import SignUp from './pages/SignUp';
import SignIn from './pages/SIgnIn';
import PrivateRoute from './components/PrivateRoute';
import Profile from './pages/Profile';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}