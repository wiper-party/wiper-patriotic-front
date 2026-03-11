"use client"

import {useSearchParams} from "next/navigation"
import MembershipCard from "../../../components/MembershipCard"

export default function Card(){

const params = useSearchParams()

const id = params.get("id")

return(

<div className="container">

<h2>Your Membership Card</h2>

<MembershipCard id={id}/>

</div>

)

}
