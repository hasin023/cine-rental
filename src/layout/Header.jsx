import { useContext, useState } from "react"
import CartDetails from "../components/CartDetails";
import { MovieContext, ThemeContext } from "../contexts/allContext";

function Header() {
    const [showCart, setShowCart] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const { cartData, setCartData } = useContext(MovieContext);
    const { darkMode, setDarkMode } = useContext(ThemeContext);

    const handleCartClose = () => {
        setShowCart(false);
    }

    return (
        <header>
            {showCart && <CartDetails onClose={handleCartClose} />}
            <nav className="container flex items-center justify-between space-x-10 py-6">
                <a href="#">
                    <img src="/assets/logo.svg" width="139" height="26" alt="" />
                </a>

                <ul className="flex items-center space-x-5">
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                            <img src="/assets/ring.svg" width="24" height="24" alt="" />
                        </a>
                    </li>
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#" onClick={() => setDarkMode(!darkMode)}>
                            <img src={`/assets/icons/${darkMode ? 'sun.svg' : 'moon.svg'}`} width="24" height="24" alt="" />
                        </a>
                    </li>
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                            href="#"
                            onClick={() => setShowCart(true)}
                        >
                            <img src="/assets/shopping-cart.svg" width="24" height="24" alt="" />
                            {cartData.length > 0 && <span className="absolute -top-2 -right-2 bg-primary text-[10px] text-white font-semibold rounded-full w-5 h-5 flex items-center justify-center">{cartData.length}</span>}
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
