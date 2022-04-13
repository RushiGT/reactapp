import {combineReducers} from 'redux';
import  cartReducer  from './CartReducer';
import restaurantReducer from './RestaurantReducer';
import onlyVegReducer from './OnlyVegReducer';

const rootReducer = combineReducers ({
    cart  : cartReducer,
    restaurant : restaurantReducer,
    onlyVeg : onlyVegReducer
});
export default rootReducer;
