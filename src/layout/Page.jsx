import Header from "./Header"
import MainContent from "./MainContent"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import MovieList from "../components/MovieList"
import { useContext } from "react"
import { ThemeContext } from "../contexts/allContext"


function Page() {
    const { darkMode } = useContext(ThemeContext)

    return (
        <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
            <div className="dark:bg-gray-900 bg-white font-Sora dark:text-white">
                <Header />
                <MainContent>
                    <Sidebar />
                    <MovieList />
                </MainContent>
                <Footer />
            </div>
        </div>
    )
}

export default Page
