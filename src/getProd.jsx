import { useState, useEffect } from 'react'
import './App.css'

function GetProd(){
    const [data, setData] = useState([])

    useEffect(()=> {
        fetch("/api/products").then(
            res => res.json()
        ).then(
            data => {
            setData(data)
            console.log(data)
        })
    }, [])

    return (
        <div>
                {data.length === 0 ? (
                    <p>No products yet...</p>
                ) : (
                    data.map((product, i) => (
                        <p key={i}>
                            Name: {product.name} | 
                            Bar code: {product.bar_code} | 
                            Price: {product.price} | 
                            Provider: {product.provider} |
                        </p>
                    ))
                )}

                
            </div>


    )

} 


export default GetProd