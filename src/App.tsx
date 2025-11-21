import { BrowserRouter as Router, Routes, Route } from 'react-router'
import './App.css'
import { LoginPage } from "./pages/loginPage";
import { CartPage } from "./pages/cartPage";
import { AdminCreate } from "./pages/adminCreatePage";
import { StorePage } from "./pages/storePage";



function App() {


  return (
    <>

     <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<CartPage />} />
          <Route path="/admincreate" element= {<AdminCreate/>}/>
          <Route path="/store" element= {<StorePage/>}/>
        </Routes>
      </Router>

    </>
  )
}

export default App
