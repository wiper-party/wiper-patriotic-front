"use client"

import {ComposableMap,Geographies,Geography} from "react-simple-maps"
import {useEffect,useState} from "react"

export default function DiasporaMap(){

const [members,setMembers]=useState([])

useEffect(()=>{

fetch("/api/diaspora")
.then(res=>res.json())
.then(data=>setMembers(data.members))

},[])

return(

<div>

<h2>{members.length} Diaspora Members</h2>

<ComposableMap>

<Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">

{({geographies}) =>
geographies.map(geo=>(
<Geography
key={geo.rsmKey}
geography={geo}
fill="#1e3a8a"
/>
))
}

</Geographies>

</ComposableMap>

</div>

)

}
