import React,{useEffect,useState} from "react";
import Onlysection from "./components/Onlysection";
//import sectionList from "./sectionList.css";
function Sectionlist(props)
{
    const {menu} = props;
    const [classChange,setclassChange] = useState(menu[0].sectionId);
   
    const handleHighlight = ()=> {
        const menus = document.querySelectorAll(".menufull");
      //console.log(menus);
      window.addEventListener("scroll", () => {
          menus.forEach((menu) => {
              let position = menu.getBoundingClientRect();
    
              let section = document.getElementById(menu.id + '1');
             
              if (position.top <= 400 && position.top >= 400 - position.height) {
                  section.classList.add('activate');
                  //console.log(section);
                 //setclassChange(change => {change = menu.id});
                  
              }
              else {
                 section.classList.remove('activate');
              }
             
             //console.log(classChange);
          })
      });
      console.log("called");
      return ()=>{console.log("finish")};
        
    }
    useEffect(handleHighlight,[]);
  //  isActive={classChange===menu.sectionId?true:false }
return (
     <ul id="varieties">
         { menu.map(
             (section)=> (<Onlysection  key = {section.sectionId} sectionId = {section.sectionId} sectionName = {section.sectionName}  firstflag={section.sectionId===menu[0].sectionId?true:false}/>) //firstflag={section.sectionId===menu[0].sectionId?true:false}
         ) }
     </ul>
);
};
export default Sectionlist;