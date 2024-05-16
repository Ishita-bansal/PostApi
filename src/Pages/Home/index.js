import React from "react";
import "./style.css";



const data = [

    {img : "/images/product-1.png",
      text: "Nordaic chair",
      price:"$50.00"
    },
    {
        img:"/images/product-2.png",
        text:"Kruzo air chair",
        price:"$78.00"
    },
    {
        img:"/images/product-3.png",
        text:"Erogonomic Chair",
        price:"$43.00"
    }
]
function Home(){
    return(
        <>
          <div style={{backgroundColor:"#3b5d50"}}>
              <div class="container">
                     <div class="row" style={{width:"100%",display:"flex",alignItems:"center"}}>
                              <div class="col-lg-5" style={{padding:"26px",textAlign:"left",height:"35vh",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                                    <h1 style={{fontSize:"52px",color:"white"}}>Modern Interior Design Studio</h1>
                                    <p style={{color:"white"}}>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique</p>
                                    <div style={{display:"flex",gap:"10px"}}>
                                        <button style={{fontWeight: 600,padding:"12px 30px",borderRadius:"30px",backgroundColor:"#f8b810" , border:"none",outline:"none"}}>Shop now</button>
                                        <button className="homebtn">Explore</button>
                                    </div>
                                 </div>
                              <div class="col-lg-7"> 
                                 <img src="/images/couch.png" alt="images"/>
                              </div>
                     </div>
              </div>
          </div>
          <div class="container"> 
          <div class="row" style={{margin:"80px 0px"}}>
                           <div class="col-lg-3" style={{textAlign:"left"}}>
                             <h2>Crafted with excellent material</h2>
                             <p style={{fontSize:"16px",color:"#6a6a6a"}}>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                             <button className="homebtn" style={{backgroundColor:"#111",color:"white"}}>Explore</button>
                           </div>
                    {
                        data?.map((info)=>{
                            return(
                                <div class="col-lg-3" style={{height:"50vh",display:"flex",flexDirection:"column",gap:"30px"}} >
                                         <img className="imageanim" src={info.img} alt="image" />     
                                  <div>
                                     <h3 style={{fontSize: "16px"}}>{info.text}</h3>
                                     <strong style={{fontWeight:800 , fontSize:"18px"}}>{info.price}</strong>      
                                   </div>
                                </div>
                            )
                        })
                    }
                </div>
          </div>
        </>
    )
}

export default Home;