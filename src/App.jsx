import { useReducer, useState } from "react"
import { MovieContext, ThemeContext } from "./contexts/allContext"
import Page from "./layout/Page"
import { cartReducer, initialState } from "./reducers/CartReducer"

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [state, dispatch] = useReducer(cartReducer, initialState)

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <MovieContext.Provider value={{ state, dispatch }}>
        <Page />
      </MovieContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
