import React, { useState } from "react";
import "./style.css";
import Menu from "./MenuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [...new Set(Menu.map((currentElement)=> currentElement.category)), "All"];
// console.log(uniqueList);

const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);

    const filterItem = (category) => {

        if(category === "All"){
            setMenuData(Menu);
            return;
        }
        const updatedList =  Menu.filter((cuurItem)=> {
            return cuurItem.category === category;
        });

        setMenuData(updatedList);
    }

    return(
        <>
        <Navbar filterItem={filterItem} menuList={menuList}/>
        <MenuCard menuData={ menuData }/>
        </>
    )
}

export default Restaurant;