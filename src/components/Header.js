
import React from 'react'
import '../App.css';
import carts from '../carts.png'


export default function Header(props) {
    console.log("Header" ,props.data)

    return (

        <div>
             <div className="add-to-cart">
                <span className="cart-count">{props.data.length}</span>
                <img src={carts} />
            </div>
        </div>
    )
}
