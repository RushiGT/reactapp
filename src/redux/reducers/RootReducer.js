import {combineReducers} from 'redux';
import  cartReducer  from './CartReducer';
import restaurantReducer from './RestaurantReducer';

const rootReducer = combineReducers ({
    cart  : cartReducer,
    restaurant : restaurantReducer
});
export default rootReducer;
