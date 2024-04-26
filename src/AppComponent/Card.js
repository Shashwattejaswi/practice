import './scroll.css';
import img from './shopping.jpg';

const Card =({id,cName,price})=>
{
    return(
        <div className="Card">
            <img src={img} alt="aa raha h"/>
            <div className="details">
                <span className="subDetail">
                    <h3 className="comp">{cName}</h3>
                    <p className="price">{price}</p>
                </span>
                <button className="ok">shop</button> 
            </div>
        </div>
    );
}
export default Card;