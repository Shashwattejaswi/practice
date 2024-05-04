import './Slide.css';
import { useEffect, useState } from 'react';
import mainBac from "./image.js";
const Slide=()=>
{
    const [slideImg,nextImg]=useState(mainBac[0]);
    const show=()=>{
        let i=0
        let changer=setInterval(()=>{
            i++;
            if(i==mainBac.length)
                i=0;
            nextImg(mainBac[i]);
            
        },5000)
    }
    useEffect(show,[]);
    return(
        <div className="Slide" style={{backgroundImage:'url('+slideImg+')'}}>
            <a className='slidebtn'></a>
            <div className="textBox">
                <h1>chalo pyar faliye</h1>
                <h5>ha pyar ki baat ho rhi</h5>
            </div>
            <a className='slidebtn'></a>
        </div>
    );
}
export default Slide;