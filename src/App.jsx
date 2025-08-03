import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from "./components/navbar"
import { Footer } from "./components/footer"
import { Home } from "./pages/Home";
import { Negara } from './pages/Negara';
import { TentangKami } from './pages/TentangKami';
import SearchBar from "./components/SearchBar";


function App() {


  return (
     <BrowserRouter>
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/negara" element={<Negara />} />
          <Route path="/tentang-kami" element={<TentangKami />} />
        </Routes>
        
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
