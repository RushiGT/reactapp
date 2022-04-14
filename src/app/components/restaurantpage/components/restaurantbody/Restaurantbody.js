import React, { Component, useEffect,useState ,useCallback} from 'react';
import Restaurantheader from './components/restaurantheader';
import Restarurantdetails from './components/restaurantdetails';
import Restaurantmenu from './components/restaurantmenu';
import RestaurantFooter from './components/restaurantfooter';
import { getRestaurantObjectDetails } from '../../../../../redux/reducers/selectors/getRestaurantDetails';
import { connect } from 'react-redux';
import {  fetchRestaurant } from '../../../../../redux/actions/RestaurantActions';
function Restaurantbody(props) {
   let {fetchRestaurantHere} = props;
    useEffect(()=>{
            fetchRestaurantHere();
    },[]);

   
    return (
        
        <div className="restaurantcontent">
            {(props.restaurant.loading || Object.keys(props.restaurant.data).length === 0) ? <div className = "loading">Loading</div> : <> <Restaurantheader />
            <Restarurantdetails />
            <Restaurantmenu />
            <RestaurantFooter /></>}
            
            </div>

    );
};
const mapStateToProps = state => {
    return {
        restaurant : getRestaurantObjectDetails(state)
    }
}
const mapDispatchToProps =  
    {
        fetchRestaurantHere : fetchRestaurant

    };

export default connect(mapStateToProps,mapDispatchToProps)(Restaurantbody);