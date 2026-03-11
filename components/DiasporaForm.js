"use client"

import {useState} from "react"
import {useRouter} from "next/navigation"

export default function DiasporaForm(){

const router = useRouter()

const [form,setForm]=useState({
name:"",
contact:"",
location:""
})

async function submit(e){

e.preventDefault()

const res = await fetch("/api/diaspora",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(form)
})

const data = await res.json()

router.push(`/diaspora/card?id=${data.id}`)
}

return(

<form onSubmit={submit}>

<input
placeholder="Full Name"
required
onChange={(e)=>setForm({...form,name:e.target.value})}
/>

<input
placeholder="Contact"
required
onChange={(e)=>setForm({...form,contact:e.target.value})}
/>

<input
placeholder="Location"
required
onChange={(e)=>setForm({...form,location:e.target.value})}
/>

<button>Register</button>

</form>

)

}
