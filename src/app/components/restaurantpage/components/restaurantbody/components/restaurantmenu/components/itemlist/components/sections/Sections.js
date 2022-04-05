import React, { useMemo } from "react";
import Items from "./components/items";
function Sections(props)
{
    let {section,onlyVeg} = props; 
    let onlyVegLength = useMemo(()=>{return (section.sectionContent.filter(x => x.itemType=="Veg").length)},[section]);
    return (
        <div className="menufull" id={section.sectionId + "cursor"}>
            <div className="sectionfull" id={section.sectionId+"Menu"}>{section.sectionName}</div>
            <div className="sizefull" id={section.sectionId+"Size"}>{onlyVeg?onlyVegLength:section.sectionContent.length} items</div>
            {section.sectionContent.map(item => (<Items key = {item.itemId} item={item} onlyVeg={onlyVeg}/>))}
        </div>
    );
};

export default Sections;