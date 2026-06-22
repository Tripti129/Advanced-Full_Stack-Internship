import React from "react";
function Navbar(){
    return(
        <>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:"#FFF0F5",height:"70px",padding:"10px",marginTop:"10px"}}>
        <img src="https://png.pngtree.com/png-clipart/20190604/original/pngtree-creative-company-logo-png-image_1197025.jpg" alt="logo" style={{height:"80px",width:"80px"}}/>

        <input type="text" placeholder="search product" style={{height:"40px",width:"400px",borderRadius:"7px"}}/>
       <div style={{display:"flex",justifyContent:"space-between", gap:"20px",alignItems:"center"}}>
<a>Home</a>
<a>About</a>
<a>Contact Us</a>
<a>Profile</a>
       </div>
       
        </div>
        
        </>
    )
}
export default Navbar;