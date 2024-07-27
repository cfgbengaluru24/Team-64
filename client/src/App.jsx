import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Header from './components/Header';
import LoginSignUp from './pages/LoginSignUp/LoginSignUp';
import donor from './pages/DonationForm';
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login-signup' element={<LoginSignUp/>} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
