import React from "react";
import Imgix from "react-imgix";

const data = [
  { id: 1,title: "Bedroom", img: require("./images/1.jpg")},
  { id: 2, title: "Living Room (1)", img: require("./images/2.jpg")},
  { id: 3, title: "Living Room (2)", img: require("./images/3.jpg")},
  { id: 4, title: "Kitchen", img: require("./images/4.jpg")},
  { id: 5, title: "Bathroom (1)", img: require("./images/5.jpg")},
  { id: 6, title: "Bathroom (2)", img: require("./images/6.jpg")},
  { id: 7, title: "From Bedroom with closet", img: require("./images/7.jpg")},
  { id: 8, title: "From Bedroom with curtain", img: require("./images/8.jpg")},
];

export const Gallery = () => (  
  // '#CAE7DF'
    <div style={{backgroundColor:"#CAE7DF", alignContent: "center", width: "100%"}} >
      {data.map(({ id, title, img}) => (
        <li className="gallery" key={id}>
          <span className="gallery">{title}</span>
          <div className="gallery" >            
            <img className="gallery" style={{backgroundColor:"#ADAADF", borderRadius: "5%", }} src={img} alt={title}></img>
          </div>
        </li>
      ))}
    </div>
);
