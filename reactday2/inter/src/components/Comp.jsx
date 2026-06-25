// import React from 'react'
// import { useEffect } from 'react'
// const useEff = () => {
//   return (
   
//     useEffect(()=>{
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res)=>{
//     return res.json()
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })
//     },[])
//   )
// }

// export default useEff
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
const Comp = () => {
     const [user,setuser]=useState([]);
     const [search,setsearch]=useState("")
        useEffect(()=>{
fetch(`https://jsonplaceholder.typicode.com/users`)
.then((res)=>{
    return res.json()
})
.then((data)=>{
  console.log(data)
    setuser(data)
})
.catch((err)=>{
    console.log(err)
})
    },[])

  return (
    <div>
      <h1>User Data</h1>
<input type="text" onChange={(e)=>{setsearch(e.target.value)}} value={search}/>

{user.filter((el)=>{
  return el.name.toLowerCase().startsWith(search)
}).map((ele)=>{
  return (<>
  <div>{ele.id}</div>
    <div>{ele.name}</div>
    <div>{ele.email}</div>
  </>
    
  )
})}

    </div>

  )
}

export default Comp