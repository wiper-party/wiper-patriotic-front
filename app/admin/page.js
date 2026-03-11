"use client"

import {useEffect,useState} from "react"

export default function Admin(){

const [members,setMembers]=useState([])

useEffect(()=>{

fetch("/api/diaspora")
.then(res=>res.json())
.then(data=>setMembers(data.members))

},[])

return(

<div className="container">

<h1>Diaspora Admin Dashboard</h1>

<table>

<thead>
<tr>
<th>Name</th>
<th>Contact</th>
<th>Location</th>
<th>ID</th>
</tr>
</thead>

<tbody>

{members.map(m=>(
<tr key={m.id}>
<td>{m.name}</td>
<td>{m.contact}</td>
<td>{m.location}</td>
<td>{m.id}</td>
</tr>
))}

</tbody>

</table>

</div>

)

}
