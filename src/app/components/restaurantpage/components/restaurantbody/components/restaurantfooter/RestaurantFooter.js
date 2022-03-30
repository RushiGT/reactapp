import React from "react";
import { useContext } from "react";
import Appcontext from '../../../../../../context/Appcontext';
function RestaurantFooter() {
    const {fullAddress,license} = useContext(Appcontext);
   return( <div className="footer0">

        <div className="foin">
            <div className="foin1">
                <div className="addfoo">ADDRESS</div>
                <div className="addfoo1"></div>
                <div className="addfoo2">{fullAddress}</div>
            </div>
            <div className="foin2">
                <div className="cui1">CUISINES</div>
                <div className="cui2"></div>
                <div className="cui3">Indian</div>

            </div>

        </div>
        <div className="footimg">
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_162,h_80/fssai_final_edss9i" height="40" width="81" />
        </div>
        <div className="footlic">
            License No. {license}</div>


    </div>);
}

export default RestaurantFooter;