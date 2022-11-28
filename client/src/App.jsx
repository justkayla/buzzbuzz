import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Container from "react-bootstrap/Container"
import { AppProvider } from "./utils/AppContext"
import Home from "./pages/Home"
import Quizzes from "./pages/Quizzes"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import PageNotFound from "./pages/404"
import Navigation from "./components/Navigation"

import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  
  const [ authUser, setAuthUser ] = useState(null)

  const checkForValidUser = async() => {
    const authCheck = await fetch("/api/user/lookup")
    const checkResult = await authCheck.json()

    if( checkResult.result === "success" ){
      setAuthUser({ _id: checkResult._id, email: checkResult.email })
    }
  }
  
  useEffect(() => {
    checkForValidUser()
  }, [])

  return (
    <AppProvider>
      <Navigation />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home authUser={ authUser } />} />
            <Route path="/login" element={<Login />} />           
            <Route path="/user/:id" element={<Profile />} />
            <Route path="/quizzes" element={<Quizzes />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </AppProvider>
  );
}

export default App;
