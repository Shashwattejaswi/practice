import "./DropDown.css";
let ele=['shirt','kurta','pajama'];
const DropDown=()=>
{


    return(
        <ul className="dropBox">
           {
            ele.map((e)=><li>{e}</li>)
           }
        </ul>
    );
}
export default DropDown;






































