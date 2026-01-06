import { BrowserRouter, Routes, Route } from "react-router";
import BulletinBoard from "./pages/BulletinBoard";
import CreatePortrait from './pages/CreatePortrait';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {

  return (
    <div className="flex w-screen items-center justify-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BulletinBoard /> } />
          <Route path="/create" element={<CreatePortrait /> } />
          <Route path="/about" element={<About /> } />
          <Route path="/contact" element={<Contact /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App