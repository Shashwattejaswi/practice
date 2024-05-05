import "./DropDown.css";
let ele=['shirt','kurta','pajama'];
const DropDown=(props)=>
{
    return(
        <ul className="dropBox" onMouseEnter={()=>props.dropsChanger(true)} onMouseLeave={()=>props.dropsChanger(false)}>
           {
            ele.map((e)=><li>{e}</li>)
           }
        </ul>
    );
}
export default DropDown;






































