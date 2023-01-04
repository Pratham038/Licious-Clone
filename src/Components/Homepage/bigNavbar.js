import React from 'react'
import lic from "../../images/licious.svg"
import loc from "../../images/location.svg"
import search from "../../images/search.svg"
import cat from "../../images/categories.svg"
import log from "../../images/login.svg";
import cart from "../../images/cart.svg";
import adv2 from "../../images/adv2.jpeg"

const BigNavbar = () => {
  return (
    <>
    <div className='bigNav'>

      <div className='inbig'>
        
        <div className='licious-Icon'>
            <img src={lic} alt='LICIOUS'/>
        </div>
        
        <div className='location'>
            <div className='loc-icon'>
                <img src={loc} alt='LICIOUS'/>
            </div>
            <div className='loc-expand'>
                <div className='upperLoc'>
                BANGLORE
                </div>
                <div className='downloc'><h5>Mithagar</h5></div>

            </div>
        </div>

        <div className='search'>
            <input type="text" name="Search"/>
            <img src={search} alt='serch' />
        </div>

        <div className='categories'>
            <img src={cat} alt='cat'/>
            <div className='cat'>Categories</div>
        </div>

        <div className='login'>
            <img src={log} alt='alt'/>
            <div className='log'>Login</div>
        </div>

        <div className='cart'>
        <img src={cart} alt='alt'/>
            <div className='car'>Login</div>
        </div>
      </div>
    </div>
    <div className='forEffect'></div>
    <div className='advertisement'>
        <img src={adv2} alt='ANIL KAPOOR'/>
    </div>


    </>
  )
}

export default BigNavbar
