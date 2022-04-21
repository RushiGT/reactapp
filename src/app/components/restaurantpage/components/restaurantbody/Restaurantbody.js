import React, { Component, useEffect,useState ,useCallback} from 'react';
import RestaurantHeader from './components/restaurantHeader';
import RestaurantDetails from './components/restaurantDetails';
import RestaurantMenu from './components/restaurantMenu';
import RestaurantFooter from './components/restaurantFooter';
import Loading from './components/loading';
import { getRestaurantObjectDetails } from '../../../../../redux/reducers/selectors/getRestaurantDetails';
import { connect } from 'react-redux';
import {  fetchRestaurant } from '../../../../../redux/actions/RestaurantActions';
function RestaurantBody(props) {
   let {fetchRestaurantHere,restaurantObject} = props;
    useEffect(()=>{
           setTimeout(()=>{fetchRestaurantHere()},1000); //fetchRestaurantHere();
    },[]);

   
    return (
        
        <div className="restaurantcontent">
            {(restaurantObject.loading || Object.keys(restaurantObject.data).length === 0) ? <Loading /> : <> <RestaurantHeader />
            <RestaurantDetails />
            <RestaurantMenu />
            <RestaurantFooter /></>}
            
            </div>

    );
};
const mapStateToProps = state => {
    return {
        restaurantObject : getRestaurantObjectDetails(state)
    }
}
const mapDispatchToProps =  
    {
        fetchRestaurantHere : fetchRestaurant

    };

export default connect(mapStateToProps,mapDispatchToProps)(RestaurantBody);