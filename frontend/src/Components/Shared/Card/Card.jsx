import React from "react";
import './Card.module.css';

const Card = (props) => {
    const See = () => {
        console.log('hi');
    }
    return (
        <>
        <div className="Cardback" >   
            <div className="cardMain"  style={{ width: "18rem", margin:"2rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{props.productName}</h5>
                    <p className="card-text description1" id="xyz">{props.productDescription}</p>
                    <a href={props.productMadeBy} className="card-text madeby" id="789">{props.productMadeBy}</a> 
                    <p className="card-text price" id="456">{props.productPrice}</p>
                    <button className="BuyNow" onClick={See}>See More</button>                        
                </div>
            </div>
        </div>
            
        
        </>
    )
}

export default Card;