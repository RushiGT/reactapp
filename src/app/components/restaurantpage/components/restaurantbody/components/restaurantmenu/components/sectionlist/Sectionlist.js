import React,{useEffect,useState} from "react";
import Onlysection from "./components/Onlysection";
 
const handleHighlight = ()=> {
    const menus = document.querySelectorAll(".menufull");
  window.addEventListener("scroll", () => {
      menus.forEach((menu) => {
          let position = menu.getBoundingClientRect();

          let section = document.getElementById(menu.id + '1');
         
          if (position.top <= 400 && position.top >= 400 - position.height) {
              section.classList.add('activate');
          }
          else {
             section.classList.remove('activate');
          }

      })
      
  });

  return ()=>{console.log("finish")};
    
}
function Sectionlist(props)
{
    const {menu} = props;
    useEffect(handleHighlight,[]);

return (
     <ul id="varieties">
         { menu.map(
             (section)=> (<Onlysection  key = {section.sectionId} sectionId = {section.sectionId} sectionName = {section.sectionName}  firstflag={section.sectionId===menu[0].sectionId?true:false}/>) //firstflag={section.sectionId===menu[0].sectionId?true:false}
         ) }
     </ul>
);
};
export default Sectionlist;