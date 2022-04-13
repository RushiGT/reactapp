import React, { useCallback, useContext } from "react";
import Appcontext from '../../../../../../context/Appcontext';
import Offer from "./components/Offer";
import { connect } from "react-redux";
import { updateOnlyVegPreference as updateOnlyVegPreferenceAction } from "../../../../../../../redux/actions/OnlyVegActions";
import { getOnlyVegDetails } from "../../../../../../../redux/reducers/selectors/getOnlyVegdetails";
function Restarurantdetails(props) {
    let {restaurant} = props;
    let { restaurantName, speciality, address, ratings, usersRat, deliveryTime, averagePriceForTwo, offers } = restaurant;
    let {onlyVeg, updateOnlyVegPreference} = props;
    
    //  let {onlyVeg,setOnlyVeg} = vegState;
    
    return (
        <div className="lgo">



            <div className="subg">
                <img className="subgimg" width="254" height="165" alt="" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/y2y8vkvvgpdu4nkxx5uj" />
            </div>

            <div className="restauin">

                <div className="board">

                    <div className="restau">{restaurantName}</div><div className="speciality">{speciality}</div><div className="address">{address}</div></div>
                <div className="rat">
                    <div className="rat0 fr">
                        <div className="rat1">

                            <span className="icon-star"></span><span>{ratings}</span></div>
                        <div className="rat2"><span>{usersRat}</span></div>
                    </div>
                    <div className="rat0 fr1">
                        <div className="rat1"><span>{deliveryTime} mins</span></div>
                        <div className="rat2">Delivery Time</div>
                    </div>
                    <div className="rat0 fr2">
                        <div className="rat1"><span>₹ {averagePriceForTwo}</span></div>
                        <div className="rat2"><span>Cost for Two</span></div>
                    </div>
                </div>
                <div className="search">

                    <div className="search1">
                        <span className="srchsym"> ? </span>

                        <input type="text" placeholder="Search for dishes..." className="srchpl" style={{ fontWeight: 600 }} />
                    </div>
                    <div className="search2">
                        <input type="checkbox" checked={onlyVeg} onChange={(e)=>{ 
                            updateOnlyVegPreference(e.target.checked)
                        }} className="search2x" /> Veg Only
                    </div>
                   
                    <div className="search3">
                        <span className="favicn">&amp;&amp; </span> <span className="favtxt">Favourite</span>
                    </div>


                </div>
            </div>
            <div className="offer0">
                <div className="offer1"> Offer</div>
                <div className="offer2">
                <div className="offe">
                        {offers.map(offer => <Offer key={offer.code} offer={offer} />
                        )}
                    </div>
                </div>
            </div>
        </div>);
};
const mapStateToProps = state => {
    return{
    onlyVeg : getOnlyVegDetails(state),
    restaurant : state.restaurant.data
    }

}
const mapDispatchToProps = {
    updateOnlyVegPreference: updateOnlyVegPreferenceAction,
};
     
export default connect(mapStateToProps,mapDispatchToProps)(Restarurantdetails);