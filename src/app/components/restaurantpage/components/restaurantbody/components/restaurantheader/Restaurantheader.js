import { connect } from 'react-redux';
import React, { Component, useEffect } from 'react';
import { getRestaurantDetails } from '../../../../../../../redux/reducers/selectors/getRestaurantDetails';
function RestarurantHeader(props) {
    let {restaurant} = props;
    return (
        <div className="head2">
            <span className="home head3" id="HOME"> Home </span>
            <span className="slash head3"> / </span>
            <span className="home head3"> Banglore </span>
            <span className="slash head3"> / </span>
            <span className="home head3"> BTM - Banglore </span>
            <span className="slash head3"> / </span>
            <span className="NAME1 head3"> {restaurant.restaurantName} </span>
        </div>
    );
};
const mapStateToProps = state => {
    return {
        restaurant : getRestaurantDetails(state)
    }
}

export default connect(mapStateToProps)(RestarurantHeader);