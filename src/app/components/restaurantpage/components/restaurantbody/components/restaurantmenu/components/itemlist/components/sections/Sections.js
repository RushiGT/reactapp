import React from "react";
import Items from "./components/items";
function Sections(props)
{
    let {section} = props; 
    return (
        <div className="menufull" id={section.sectionId + "cursor"}>
            <div className="sectionfull" id={section.sectionId+"Menu"}>{section.sectionName}</div>
            <div className="sizefull" id={section.sectionId+"Size"}>{section.sectionContent.length} items</div>
            {section.sectionContent.map(item => (<Items key = {item.itemId} item={item} />))}
        </div>
    );
};

export default Sections;