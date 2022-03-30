import React from "react";
import Sections from "./components/sections";
function Itemlist(props){

    const {menu} = props;
    return (
         <div id="menuim">
             {menu.map(section => (<Sections section = {section} key = {section.sectionId} />))}
            
         </div>
    );
};

export default Itemlist;