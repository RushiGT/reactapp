import React, { Component, useEffect } from 'react';
import Restaurantheader from './components/restaurantheader';
import Restarurantdetails from './components/restaurantdetails';
import Restaurantmenu from './components/restaurantmenu';
import RestaurantFooter from './components/restaurantfooter';
function Restaurantbody() {
    return (
        <div className="restaurantcontent">
            <Restaurantheader />
            <Restarurantdetails />
            <Restaurantmenu />
            <RestaurantFooter />
            </div>

    );
};
export default Restaurantbody;