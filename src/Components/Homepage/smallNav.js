import React from 'react'
import apple from "../../images/apple.svg";
import playstore from "../../images/playstore.svg";


const Smallnav = () => {
  return (
    <>
      <div className="smallNav">
        <div className="smallNav1">
          <ul style={{ listStyle: "none", display: "flex" }}>
            <li style={{ paddingLeft: "11.813rem" }}>Why Licious?</li>
            <li style={{ paddingLeft: "3.125rem" }}>Download App</li>
            <li>
              <img src={apple} alt="appstore" style={{ marginLeft: "2rem" }} />
            </li>
            <li>
              <img src={playstore} alt="playstre"  style={{ marginLeft: "2rem" }}/>
            </li>
          </ul>
        </div>
        <div className="smallNav2">
          <ul style={{ listStyle: "none", display: "inline-flex" }}>
            <li>FSSC 22000 Certification</li>
            <li>About Us</li>
            <li>Careers@Licious</li>
            <li style={{ paddingRight: "11.813rem" }}>Contact Us</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Smallnav
