import React from 'react'

const Card = (props) => {
  return (
    <div style={{height:"400px",width:"400px" ,border:"3px solid brown"}}>
        <div style={{display:"flex",flexWrap:"wrap" ,gap:"10px",justifyContent: "center",alignItems : "center", height :"400px",width:"400px"}}>
        <img src={props.image} style={{width:"40%"}}/>
        <p></p>
        <img src={props.image} style={{width:"40%"}}/>
         <img src={props.image} style={{width:"40%"}}/>
        <img src='https://th.bing.com/th/id/OIP.we9Nx0UuWeWnP-VapQUrkQHaHa?w=196&h=196&c=7&r=0&o=7&pid=1.7&rm=3' style={{width:"40%"}}/>

        </div>

    </div>
  )
}

export default Card