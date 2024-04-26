import './Nav.css';

const NavIcon =()=>
{
    let iconContent=['Home','Mens','Women','Order','About'];
    return(
         <ul className="nav">
            {
                iconContent.map((a)=>{
                    return(<li>{a}</li>);
                })
            }
        </ul>
    );
}
export default NavIcon;