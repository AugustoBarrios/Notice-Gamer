import React from 'react';
import data from "../ItemListContainer/mock-data";
import { useState, useEffect } from 'react';
import ItemDetaill from "../itemDetail/itemDetail"


function ItemDetailContainer() {
    const [ItemDetail, setItemDetail] = useState({});

    const getItem = ()=>{
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(data[0])
            }, 2000)
        })
    }

    useEffect(() => {
        const getProducto = async () => {
            const producto = await getItem();
            console.log(' producto ', producto)
            setItemDetail(producto);
        }
        getProducto();
    }, [])

    return (
            <div>
                <ItemDetaill Detalle={ItemDetail} />
            </div>
    )
}

export default ItemDetailContainer;

/* useEffect (() => {
    const getProducto = async ( ) = > {
   }
        const producto = await getItem ( ) ;
        console.log ( ' producto ' , producto )
        setItem ( producto ) ;
    getProducto ( ) ;
} , [ ] ) */
