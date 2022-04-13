import React, { Component, useEffect,useState ,useCallback} from 'react';
import Restaurantheader from './components/restaurantheader';
import Restarurantdetails from './components/restaurantdetails';
import Restaurantmenu from './components/restaurantmenu';
import RestaurantFooter from './components/restaurantfooter';
import { connect } from 'react-redux';
import { fetchMenuSuccess,fetchMenuFailure,fetchMenuRequest,fetchMenu } from '../../../../../redux/actions/MenuActions';
function Restaurantbody(props) {
   
    useEffect(()=>{
            props.fetchMenu();
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
        restaurant : state.restaurant
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchMenu : () => dispatch(fetchMenu())

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Restaurantbody);