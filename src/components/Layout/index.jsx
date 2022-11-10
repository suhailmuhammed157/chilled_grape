import React, { useEffect, useState } from "react";
import './index.scss'
import Header from "../Header";
import Description from "../Description";
import Items from "../Items";
import Footer from "../Footer";
export default function Layout(){
    const [products,setProducts]=useState([])
    useEffect(()=>{
        getProducts();       
    },[])

    async function  getProducts(){
        const response = await fetch('https://my-json-server.typicode.com/TomSearle/cb-devtest-api/products');
        const data = await response.json()
        setProducts(data[0])  
    }
    console.log(products)
    return (
        <div className="layout">
            <Header/>
            <Description/>
            <Items items={products}/>
            <Footer/>
        </div>
    )
}
