import React from "react"
import { useState } from "react"

export const cartContext = React.createContext();

export const CartProvider = ({ children }) => {
    const [productCartList, setproductCartList] = useState([]);

    const addItem = (item, quantity) => {
        console.log("item", item, "quantity", quantity)
        const newProduct = {
            ...item,
            quantity
        }

        if (isInCart(item.Id)) {
            const productPos = productCartList.findIndex(product => product.Id === item.Id);
            const newArreglo = [...productCartList];
            newArreglo[productPos].quantity = newArreglo[productPos].quantity + quantity;
            newArreglo[productPos].quantityPrecio = newArreglo[productPos].quantity * 
            newArreglo[productPos].Precio;
            setproductCartList(newArreglo);
        } else {
            const newArreglo = [...productCartList];
            newProduct.quantityPrecio = newProduct.quantity * newProduct.Precio;
            newArreglo.push(newProduct);
            setproductCartList(newArreglo);
        }

    }

    function removeItem(itemId) {
        console.log("item removido", itemId)
        const newArreglo = productCartList.filter(product => product.Id !== itemId);
        setproductCartList(newArreglo)
    }

    function clear() {
        setproductCartList([]);
    }

    function isInCart(productId) {
        const product = productCartList.some(item => item.Id === productId);
        return product;
    }

    function getTotal(){
        const total = productCartList.reduce((acc, item) => acc + item.quantityPrecio,0)
        return total;
    }

    function totalProducts(){
        const total = productCartList.reduce((acc, item) => acc + item.quantity,0);
        return total;
    }


    return (
        <cartContext.Provider value={{ productCartList, addItem, removeItem, clear, getTotal, totalProducts }}>
            {children}
        </cartContext.Provider>
    )
}

