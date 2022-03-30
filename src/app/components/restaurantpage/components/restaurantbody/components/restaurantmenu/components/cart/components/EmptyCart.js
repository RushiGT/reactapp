import React from "react";
import { useContext } from "react";
import image from "../constants/Cart_empty_image.png"
function EmptyCart (props) 
{
    
     return (
       
        <div id="filler0">
            <div className="CE">Cart Empty</div>
            <img src={image} height="212px" width="278" className="ceimg"/>
            <div className="CE2">Good food is always cooking! Go ahead, order some yummy items from the menu.</div>
        </div>
 
     );
}
export default EmptyCart;