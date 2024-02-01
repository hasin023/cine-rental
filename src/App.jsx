import { useReducer, useState } from "react"
import { MovieContext, ThemeContext } from "./contexts/allContext"
import Page from "./layout/Page"
import { cartReducer, initialState } from "./reducers/CartReducer"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [state, dispatch] = useReducer(cartReducer, initialState)

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <MovieContext.Provider value={{ state, dispatch }}>
        <Page />
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover={false}
          theme={darkMode ? "dark" : "light"}
          transition:Slide
        />
      </MovieContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
