import { useState } from 'react';
import './Nav.css';
import DropDown from'./DropDown';

const NavIcon =()=>
{
    let iconContent=['Home','Mens','Women','Order','About'];
    const [drop,drops]=useState(false);
    const dropsChanger=(b)=>
        {
            drops(b);
            return;
        }
    return(
         <ul className="nav">
            {
                iconContent.map((a)=>{
                    return(
                    <>
                    <li onMouseOver={()=>drops(true)} onMouseLeave={()=>dropsChanger(false)}>{a}</li>
                    
                    </>);
                })
                
            }
            {
                drop?<DropDown dropsChanger={dropsChanger}/>:null
            }
             
        </ul>
    );
}
export default NavIcon;