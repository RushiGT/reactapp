import React from "react";
import Sections from "./components/sections";
function Itemlist(props){

    const {menu,onlyVeg} = props;
    return (
         <div id="menuim">
             {menu.map(section => (<Sections section = {section} key = {section.sectionId} onlyVeg = {onlyVeg} />))}
            
         </div>
    );
};

export default Itemlist;