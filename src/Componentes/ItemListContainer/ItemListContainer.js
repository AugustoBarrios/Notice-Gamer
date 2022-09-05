import React from 'react';
import "./ItemListContainer.css";
import data from "./mock-data";
import { useState, useEffect } from 'react';
import ItemList from "../itemList/itemList";

function ItemListContainer({ greeting }) {

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
            <div>{greeting}</div>
            <br/>
            <br/>
            <ItemList itemList= {item} />
        </>
    )
}

export default ItemListContainer;