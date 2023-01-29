import React from "react";
import Imgix from "react-imgix";
import video from "./video/1.mp4"

const data = [
  { id: 1,title: "Bedroom", img: require("./images/1.jpg")},
  { id: 2, title: "Living Room (1)", img: require("./images/2.jpg")},
  { id: 3, title: "Living Room (2)", img: require("./images/3.jpg")},
  { id: 4, title: "Fridge", img: require("./images/4.jpg")},
  { id: 5, title: "Bathroom (1)", img: require("./images/5.jpg")},
  { id: 6, title: "Kitchen", img: require("./images/6.jpg")},
  { id: 7, title: "Bedroom (view)", img: require("./images/7.jpg")},
  //{ id: 8, title: "From Bedroom with curtain", img: require("./images/8.jpg")},
];

export const Gallery = () => (  
  /*
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

*/
<div className="tm-main-content" >

                <section className="tm-margin-b-l">
                    <header>                        
                        <h2 className="tm-main-title">                         
                         <p className="tm-main-title"> <i className="fa tm-fa-4x fa-home "/> Supalai / Sukhumwit 101/2 </p>
                        </h2>    
                    </header>
                        <p className="tm-figcaption"> Furnished: 1 Bedroom - 2nd floor (42 sqm) - I2 building <br/>
                         <hr/>
                          1 ห้องนอน, ชั้น 2, เฟอร์นิเจอร์มีพร้อม: <br/>
                          Bed, Closet, Sofa(bed), <br/>
                          Flat TV, 2 Air-Cons, <br/>
                          Microwave, Refrigerator, Table/Chairs, etc. 
                        </p>                    
                    <div className="tm-gallery">



                    <div className="row" >  
                                {data.map(({ id, title, img}) => (
                                      <figure className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                                        <div className="tm-gallery-item-overlay">
                                          <img className="img-fluid tm-img-center" style={{borderRadius: "2%" }} src={img} alt={title}></img>
                                        </div>
                                      <p className="tm-figcaption">{id} {title}</p>
                                      </figure>                   
                                ))}

                                      <figure className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                                        <div className="tm-gallery-item-overlay">
                                            <video width="535" height="300" controls >
                                            <source src={video} type="video/mp4"/>
                                            </video>
                                        </div>
                                        <p className="tm-figcaption"> Video (Walkthough)</p>
                                      </figure>

 
                      </div>
                    </div>                    
                </section>

                <section className="media tm-highlight tm-highlight-w-icon">
                    <div className="tm-highlight-icon">
                        <i className="fa tm-fa-6x fa-mobile"></i>    
                    </div>                    
                    <div className="media-body">
                        <header>
                            <h2>8,500 Baht per month / บาทต่อเดือน</h2>
                            <h4></h4>
                        </header>
                        <p className="tm-margin-b"></p>
                        <a href="tel:+6686112264" className="tm-white-bordered-btn">  Call: 086-611-2264  (Ja-Sri / เจ้-ศรี)  </a>
                    </div>                    
                </section>
            </div> 



);
