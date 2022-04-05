import React, { Component, useEffect,useState ,useCallback} from 'react';
import Restaurantheader from './components/restaurantheader';
import Restarurantdetails from './components/restaurantdetails';
import Restaurantmenu from './components/restaurantmenu';
import RestaurantFooter from './components/restaurantfooter';
function Restaurantbody() {
    let [onlyVeg, setOnlyVeg] = useState(false);

   
    return (
       
        <div className="restaurantcontent">
            <Restaurantheader />
            <Restarurantdetails vegState = {{onlyVeg,setOnlyVeg}}/>
            <Restaurantmenu onlyVeg = {onlyVeg}/>
            <RestaurantFooter />
            </div>

    );
};
export default Restaurantbody;