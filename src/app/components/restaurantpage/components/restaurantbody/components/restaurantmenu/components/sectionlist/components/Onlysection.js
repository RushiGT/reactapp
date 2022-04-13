import React from "react";
import Scrollspy from 'react-scrollspy';
function Onlysection(props) {
    const { sectionId,sectionName,firstflag } = props;
    return (
        
        <li className={firstflag?"activate":""} id={sectionId + "cursor1"}>
            <a className="ListSection" id={sectionId} href={"#" + sectionId + "cursor"}>
                {sectionName}
            </a>
        </li>
    
    );
};

export default Onlysection;