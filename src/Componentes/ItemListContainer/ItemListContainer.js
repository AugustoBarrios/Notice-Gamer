import React from 'react';
import "./ItemListContainer.css";
import data from "./mock-data";
import { useState, useEffect } from 'react';
import ItemList from "../itemList/itemList";


function ItemListContainer({ greeting, children }) {

    const [item, setItem] = useState([]);

    const Promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000)
    })

    useEffect(() => {
        Promesa.then((result) => {
            setItem(result);
            console.log(result);
        })
    }, [])
    return (
        <>
            <div>{children}</div>
            <div>{greeting}</div>
            <br/>
            <br/>
            {item.length > 0 ? (<ItemList itemList= {item} />
            ) : (<div>Cargando...</div>)}
            
        </>
    )
}

export default ItemListContainer;