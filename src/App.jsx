import { useState } from "react"
import MovieList from "./components/MovieList"
import { MovieContext } from "./contexts/allContext"
import Footer from "./layout/Footer"
import Header from "./layout/Header"
import MainContent from "./layout/MainContent"
import Sidebar from "./layout/Sidebar"

function App() {
  const [cartData, setCartData] = useState([])

  return (
    <div className="dark:bg-body bg-white font-Sora dark:text-white text-dark">
      <MovieContext.Provider value={{ cartData, setCartData }}>
        <Header />
        <MainContent>
          <Sidebar />
          <MovieList />
        </MainContent>
        <Footer />
      </MovieContext.Provider>
    </div>
  )
}

export default App
