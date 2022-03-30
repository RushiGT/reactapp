import React, { useContext } from "react";

function  Offer(props){
    const {offer} = props;
    return(<div className="off2e">
    <div className="off3c">**</div>
    <div className="off3c">
        <span className="spbre">{offer.description}</span><span>Use code <strong>{offer.code}</strong></span>
    </div>
</div>);
};
export default Offer;