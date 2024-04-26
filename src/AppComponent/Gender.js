import "./Gender.css";
import im from "./shopping.jpg";
const Gender=()=>
{
    let imgs=[[im,im,im,im],[im,im,im,im]];
    
    return(
        <div className="Gender">
            <div className="subGender baseGender">
                {imgs[0].map((a)=>{return(
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