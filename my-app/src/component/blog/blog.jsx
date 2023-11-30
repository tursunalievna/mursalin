import React from "react";

export default function Blog({text, color, image}){
    return(
        <div style={{width:'300px',height:'200px',borderRadius:'20px',background: color}}>
            <div>
                <img src={image} />
                <div className="text">
                    <h1> {text} </h1>
                    <div> -- </div>
                </div>
            </div>
        </div>
    )
}