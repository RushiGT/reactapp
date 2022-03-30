import React, { useContext ,useEffect, useState} from "react";
import CartContext from "../../context.js/CartContext";
function Button (props)
{
    let cartContext = useContext(CartContext);
    let {cartObject,setCartObject,handleChange} = cartContext;
    let {buttonState,setbuttonState,item} = props;
    let [quantity,setQuantity] = useState(0);
    function toggle(newstate)
    {   if(newstate===2)
        {   
            setQuantity(1);
            handleChange({type:"push",item:item,quantity:1});
            setbuttonState(2);
            
        }
    }
    function handleincrement(action)
    {   let quantitycpy = quantity; 
        setQuantity(quantity => (quantity+1));
        handleChange({type:"increment",item:item,quantity : quantitycpy+1});
   
    }
    function handledecrement(action)
    {  let quantitycpy = quantity; 
        if(quantitycpy === 1)
        {
            setbuttonState(1);
            handleChange({type:"remove",item:item});
            setQuantity(0);
        }
        else 
        {
         setQuantity(quantity => (quantity-1));
        handleChange({type:"decrement",item:item,quantity : quantitycpy-1});
        }
    }
    
    return(
        
            <div className="buttonDiv">
                {(buttonState===1) && (<div className="addButtonDiv">
                        <button onClick={()=>toggle(2)} className="addbutton">ADD</button>
                    </div>) }

            {(buttonState === 2) && (<div className="quantityDiv">
                <button onClick={()=>handleChange({type:"decrement",item:item})} className="minus" id={item.itemId + "minus"}>-</button>
                <span className="quantity" id={item.itemId + "quantity"}> {cartObject.itemCount.get(item.itemId)}</span>
                <button onClick={()=>{
                    handleChange({type:"increment",item:item})
                }} className="plus" id={item.itemId + "plus"}>+</button>
                
            </div>)}    


            </div>
        
        

    );
}

export default Button;