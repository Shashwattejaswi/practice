import "./Gender.css";
import im from "./shopping.jpg";
import {cardImgs} from "./image.js";
const Gender=()=>
{
    let imgs=[[im,im,im,im],[im,im,im,im]];
    let img2=[cardImgs[0],cardImgs[1],cardImgs[3],cardImgs[4]];
    
    return(
        <div className="Gender">
            <div className="subGender baseGender">
                {img2.map((a)=>{return(
                   <div className="showCard">
                   <img src={a}></img>
                   <p>hehe</p>
               </div> 
                );})}
            </div>
            <div className="subGender">
                 {imgs.map((a)=>{return(<div className="subGender baseGender">
                    {a.map((b)=>{return(
                    <div className="showCard">
                        <img src={b}></img>
                        <p>hehe</p>
                    </div>);})}
                 </div>);})}
            </div>
        </div>


    );

}
export default Gender;