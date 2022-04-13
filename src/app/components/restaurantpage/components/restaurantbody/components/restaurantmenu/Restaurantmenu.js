import React, { useCallback, useContext, useEffect, useMemo, useReducer } from "react";
import Appcontext from '../../../../../../context/Appcontext';
import Sectionlist from "./components/sectionlist";
import Itemlist from "./components/itemlist";
import Cart from "./components/cart";
import { connect } from "react-redux";
import { getOnlyVegDetails } from "../../../../../../../redux/reducers/selectors/getOnlyVegdetails";

function Restaurantmenu(props) {
    let {onlyVeg}  = props;
    let { menu } = useContext(Appcontext);
   

    return (
            <div className="menu">
                <Sectionlist menu={menu} />
                <Itemlist menu={menu} onlyVeg = {onlyVeg}/>
                <Cart />
            </div>
  
    );

};
const mapStateToProps = state => {
    return{
    onlyVeg : getOnlyVegDetails(state)
    }

}
export default connect(mapStateToProps)(Restaurantmenu);