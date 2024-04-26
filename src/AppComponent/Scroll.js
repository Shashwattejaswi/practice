import './scroll.css';
import Card from './Card';

const Scroll =()=>
{
    const priceDetail=[
        {
            Id:1,
            cName:'killer',
            price:599
        },
        {
            Id:2,
            cName:'peter England',
            price:699
        },
        {
            Id:3,
            cName:'spark',
            price:499
        },
        {
            Id:4,
            cName:'Denail',
            price:279
        },
        {
            Id:4,
            cName:'Denail',
            price:279
        },
        {
            Id:4,
            cName:'Denail',
            price:279
        },
        {
            Id:4,
            cName:'Denail',
            price:279
        }
    ]
    return (
        <div className="scroll">
            <div className="scrollBox">
                  {
                    priceDetail.map((a)=>{
                        return(
                            <Card id={a.Id} cName={a.cName} price={a.price}/>
                        );
                    })
                  }
                  <Card/>            
            </div>
        </div>
    );
}
export default Scroll;