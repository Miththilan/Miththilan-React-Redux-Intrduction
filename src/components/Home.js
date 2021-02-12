import React from 'react'
import iphone from '../iphone.jpg'
import '../App.css';

function Home(props) {
    console.log("HOme" ,props.data)
    return (
        <div>
           
            <h1>Home Component</h1>

            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src={iphone} />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={
                        ()=>{props.addToCartHandler({price:1000,name:'i phone 11'})
                    }}>
                        Add To Cart</button>
                        
                </div>
                <div className="remove-cart">
                    <button onClick={
                        ()=>{props.removeToCartHandler()
                    }}>
                        Remove To Cart</button>
                        
                </div>
            </div>
        </div>
    )
}

export default Home;