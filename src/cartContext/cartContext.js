import React from "react"
import {useState} from "react"

export const cartContext = React.createContext();

export const CartProvider = ({children}) => { 
    const [productCartList, setproductCartList] = useState([]);

    const addItem =(item ,quantity)=>{
        console.log("item", item, "quantity", quantity)
        const newProduct ={
            ...item,
            quantity
        }

        if(isInCart(item.Id)){
            const productPos = productCartList.findIndex(product=> product.Id === item.Id);
            const newArreglo = [...productCartList];
            newArreglo[productPos].quantity = newArreglo[productPos].quantity + quantity;
            setproductCartList(newArreglo);
        } else{
            const newArreglo = [...productCartList];
            newArreglo.push(newProduct);
            setproductCartList(newArreglo);
        }

    }

    function removeItem(itemId){
        console.log("item removido", itemId )
        const newArreglo = productCartList.filter(product=>product.Id !== itemId);
        setproductCartList(newArreglo)
    }

    function clear(){
        setproductCartList([]);
    }

    function isInCart(productId){
        const product = productCartList.some(item=>item.Id === productId);
        return product;
    }
    
    return(
        <cartContext.Provider value={{productCartList, addItem, removeItem, clear}}>
            {children}
        </cartContext.Provider>
    )
}

