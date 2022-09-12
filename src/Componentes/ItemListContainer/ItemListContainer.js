import React from 'react';
import "./ItemListContainer.css";
import data from "./mock-data";
import { useState, useEffect } from 'react';
import ItemList from "../itemList/itemList";
import {useParams} from "react-router-dom"


function ItemListContainer({ greeting}) {
    const {Id} = useParams();
    const [item, setItem] = useState([]);

    const Promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000)
    })

    useEffect(() => {
        Promesa.then(result=> {
            if(Id){
                const Productos = result.filter(producto => producto.Categoria === Id);
                setItem(Productos)
            }else{
                setItem(result);
            }
        })
    }, [Id])
    return (
        <>
            <div className='Saludo'>{greeting}</div>
            <br/>
            <br/>
            {item.length > 0 ? (<ItemList itemList= {item} />
            ) : (<div>Cargando...</div>)}
            
        </>
    )
}

export default ItemListContainer;