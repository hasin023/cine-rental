import MovieList from "./components/MovieList"
import Footer from "./layout/Footer"
import Header from "./layout/Header"
import MainContent from "./layout/MainContent"
import Sidebar from "./layout/Sidebar"

function App() {

  return (
    <div className="dark:bg-body bg-white font-Sora dark:text-white text-dark">
      <Header />
      <MainContent>
        <Sidebar />
        <MovieList />
      </MainContent>
      <Footer />
    </div>
  )
}

export default App
