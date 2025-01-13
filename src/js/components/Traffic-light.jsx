import React, { useState } from "react";

const TrafficColor = ()=> {
    const [color, setColor] = useState('red')
        
        function Alto (){
           setColor("red");
         }
    
         function Precausion (){
            setColor("yellow");
         }
    
         function Adelante(){
           setColor("green");
         }
 return(
     <>
      
      <div className="traffic-light-container" style={{  display: "flex", alignItems: "center"}}>
       <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", }}>
       </div>


       
        
	     
         <div  style={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "black", width: "120px", padding: "20px", borderRadius:"5px", }}>

            <div onClick={Alto} style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "red", boxShadow: color === "red" ? "0 0 20px 10px red" : "none", margin: "10px", cursor: "pointer",}}></div>
            <div onClick={Precausion} style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "yellow", boxShadow: color === "yellow" ? "0 0 20px 10px yellow" : "none", margin: "10px", cursor: "pointer",}}></div>
            <div onClick={Adelante} style={{ width: "60px",  height: "60px", borderRadius: "50%", backgroundColor: "green", boxShadow: color === "green" ? "0 0 20px 10px green" : "none", margin: "10px", cursor: "pointer",}}></div> 

         </div>
          
      
      
      </div>
		 	
    </>
 )
}

export default TrafficColor