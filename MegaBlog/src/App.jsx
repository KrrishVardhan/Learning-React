import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  const [loadingState, setLoadingState] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        }
        else {
          dispatch(logout())
        }
      })
      .finally(() => {
        setLoadingState(false)
      })
  }, [])


  if (loadingState) {
    return (
      null
    )
  }
  else {
    return (
      <div>
        <Header />
        <main>
          {/* Outlet */}
        </main>
        <Footer />
      </div>
    )
  }
}

export default App