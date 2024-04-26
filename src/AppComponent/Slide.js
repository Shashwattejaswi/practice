import './Slide.css';
import { useState } from 'react';
import mainBac from "./image.js";
const Slide=()=>
{
    const [slideImg,nextImg]=useState(mainBac[0]);
    
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