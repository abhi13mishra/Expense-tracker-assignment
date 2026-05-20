import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard/Dashboard"
import Transactions from "./pages/Transactions/Transactions"
import AddTransaction from "./pages/AddTransaction/AddTransaction"
import Analytics from "./pages/Analytics/Analytics"
import Navbar from "./components/CommonComponents/Navbar/Navbar"
import Profile from "./pages/Profile/Profile"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/transactions' element={<Transactions />} />
        <Route path='/add' element={<AddTransaction />} />
        <Route path='/analytics' element={<Analytics />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <Navbar />
    </BrowserRouter>
  )
}

export default App
