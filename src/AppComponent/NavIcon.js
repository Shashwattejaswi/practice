import { useState } from 'react';
import './Nav.css';
import DropDown from'./DropDown';

const NavIcon =()=>
{
    let iconContent=['Home','Mens','Women','Order','About'];
    let showPopup=()=>
    {
        return <DropDown/>;
    }
    return(
         <ul className="nav">
            {
                iconContent.map((a)=>{
                    return(
                    <>
                    <li onMouseEnter={showPopup}>{a}</li>
                    {}
                    </>);
                })
            }
        </ul>
    );
}
export default NavIcon;