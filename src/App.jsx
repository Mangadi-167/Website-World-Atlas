import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/footer"
import  Home  from "./pages/Home";
import  Negara  from './pages/Negara';
import  TentangKami  from './pages/TentangKami';
import SearchBar from "./components/SearchBar";
import CountryDetail from './pages/CountryDetail';


function App() {

  return (
     <BrowserRouter>
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/negara" element={<Negara />} />
          <Route path="/tentang-kami" element={<TentangKami />} />
          <Route path="/country/:countryName" element={<CountryDetail />} />
        </Routes>
        
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
