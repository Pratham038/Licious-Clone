import React,{useState} from 'react'
import expl from "../../images/Todays_Deals.png"
import info from '../../images2info';
const ExplorebyCat = () => {
    const[items , setItems] = useState(info);

  return (
    <>
    <div style={{backgroundColor:"#f7f6f6"}}>
    <div className='explore-main'>
        <div className='main-head'>
        Shop by categories
        </div>
        <div className='sec-head'>
        Freshest meats just for you
        </div>

        <div className='explore'>

        {
                items.map((elem)=>{
                    const {id,name,img} = elem;
                    return(
                        <div className='card'>
                <img  src={img} alt='wfwf'/>
                <div className='card-name'>
                    {name}
                </div>
            </div>
                        
                    )
                })
            }
        </div>
    </div>
    </div>
    </>
  )
}


export default ExplorebyCat