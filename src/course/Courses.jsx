import { useState } from "react";

function Courses(props) {
    const [purchased, setPurchased] = useState(false);

    const [price, setPrice] = useState(props.price);
    const [discountApplied, setDiscountApplied] = useState(false); // Track if discount is applied

   

    // Function to apply a discount
    function priceDis(amt) {
        if (!discountApplied) { // Only apply the discount if it hasn't been applied
            const newPrice = price - amt;
            setPrice(newPrice > 0 ? newPrice : 0); // Ensure price doesn't go below 0
            setDiscountApplied(true); // Mark discount as applied
        }
    }

    // Function to handle purchase
    function onClicked(discount) {
        console.log(`${props.name} purchased with ${discount}% discount`);
        setPurchased(true);
    }

    return (
        props.name && (
            <div className="card">
                <img src={props.image} alt="Course Thumbnail" />
                <h2>{props.name}</h2>
                <h2>${price}</h2>
                <button onClick={() => onClicked(20)}>Buy now</button>
                 <button onClick ={() => props.delete(props.id)} > Delete</button>
                <p>{purchased ? "Purchased" : "Get it now"}</p>
                    
                <button 
                    onClick={() => priceDis(50)} 
                    disabled={discountApplied} // Disable button after applying discount
                >
                   
                    {discountApplied ? "Discount Applied" : "Apply Discount"}
                </button>
               
            </div>
        )
    );
}

export default Courses; 