import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Edit from './pages/Edit'
import Rights from './pages/Rights'
import Archives from './pages/Archives'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/edit/:section" element={<Edit />} />
      <Route path="/rights" element={<Rights />} />
      <Route path="/archives" element={<Archives />} />
    </Routes>
  )
}
