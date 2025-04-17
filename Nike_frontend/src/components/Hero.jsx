import React from "react";

const Hero=()=>{
    return(
        <React.Fragment>
            <div className="hero">
                <div className="hero-1">
                <div className="hero-content">
                    <h1>YOUR FEET DESERVED THE BEST</h1>
                    <p>YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.</p>
                </div>
                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>
                </div>
                <div className="hero-img">
                <img src={`${process.env.PUBLIC_URL}/img/nike_shoes.jpg`} alt="shoe-img" />
                </div>
            </div>
        </React.Fragment>
    )
}
export default Hero;