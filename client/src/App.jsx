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
import Effects from './pages/Effects';
import TermsOfUse from './pages/TermsOfUse';
import Copyright from './pages/Copyright';
import Footer from './components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="pt-36 extrasmall:pt-52 header-sm:pt-36 sm:pt-40 md:pt-40 header-special:pt-24 lg:pt-40 xl:pt-24"> {/* Adjust these values based on your header's height */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/effects" element={<Effects />} />
          <Route path="/learn-more" element={<LearnMore />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/copyright" element={<Copyright />} />
          <Route element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}
