import { createContext , useState , useEffect} from "react"

// CartContextProvider.js

export const CartContext = createContext({});

export default function CartContextProvider({ children }) {
    const [cartProducts, setCartProducts] = useState([]);

    function addProduct(productId) {
        setCartProducts((prev) => [...prev, productId]);
    }

    // useEffect(() => {
    //     if (cartProducts?.length > 0) {
    //       ls?.setItem('cart', JSON.stringify(cartProducts));
    //     }
    //   }, [cartProducts]);

    return (
        <CartContext.Provider value={{ cartProducts, setCartProducts, addProduct }}>
            {children}
        </CartContext.Provider>
    );
}
