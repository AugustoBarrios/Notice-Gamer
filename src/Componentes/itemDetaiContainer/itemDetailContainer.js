import React from 'react';
import data from "../ItemListContainer/mock-data";
import { useState, useEffect } from 'react';
import ItemDetaill from "../itemDetail/itemDetail"
import {useParams} from "react-router-dom";
import { db } from "../../utils/firebase";
import {doc, getDoc} from "firebase/firestore";


function ItemDetailContainer() {
    const {Id} = useParams();
    const [ItemDetail, setItemDetail] = useState({});

    /* const getItem = (id)=>{
        return new Promise((resolve, reject) => {
            
                const DetalleProducto = data.find(producto=> producto.Id ===parseFloat(id))
                resolve(DetalleProducto);
            
        })
    }

    useEffect(() => {
        const getProducto = async () => {
            const Detalle = await getItem(Id);
            setItemDetail(Detalle);
        }
        getProducto();
    }, []) */

    useEffect(()=>{
        const getProducto = async () => {
            const Ref = doc(db,"items",Id);
            const response = await getDoc(Ref);
            const newItem = {
                Id: response.id,
                ...response.data(),
            }
            console.log(newItem);
            setItemDetail(newItem);
        }
        getProducto();
    },[Id])

    return (
            <div>
                <ItemDetaill Detalle={ItemDetail} />
            </div>
    )
}

export default ItemDetailContainer;


