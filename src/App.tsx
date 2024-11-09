import Home from "./components/Home"
import SignIn from "./components/SignIn"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
function App() {
  
  return (
    <Router>
      <Routes>
        <Route   path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  )
}

export default App
