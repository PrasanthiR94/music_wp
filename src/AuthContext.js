import { createContext, useContext, useState } from "react";

const AuthContext = createContext({})

export const AuthContextProvider = ({children})=>{

    const [currentCategory,setCurrentCategory] = useState("")
    const [products,setProducts] = useState([])

    const [currentProduct,setCurrentProduct] = useState({})
    const [itemCount,setItemCount] = useState(0)



    return (
        <AuthContext.Provider
        value={{currentCategory,setCurrentCategory,products,setProducts,setCurrentProduct,currentProduct,
            setItemCount,itemCount
        }}
        >{children}</AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)