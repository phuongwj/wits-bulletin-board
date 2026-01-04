import { BrowserRouter, Routes, Route } from "react-router";
import BulletinBoard from "./pages/BulletinBoard";
import CreatePortrait from './pages/CreatePortrait';

function App() {

  return (
    <div className="flex w-screen items-center justify-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BulletinBoard /> } />
          <Route path="/create" element={<CreatePortrait /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App