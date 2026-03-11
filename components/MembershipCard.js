"use client"

import {useEffect,useState} from "react"
import QRCode from "qrcode"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"

export default function MembershipCard({id}){

const [qr,setQr]=useState("")

useEffect(()=>{

QRCode.toDataURL(`WIPER_MEMBER_${id}`)
.then(setQr)

},[id])

function download(){

const card=document.getElementById("card")

html2canvas(card).then(canvas=>{

const img=canvas.toDataURL("image/png")

const pdf=new jsPDF()

pdf.addImage(img,"PNG",10,10,180,80)

pdf.save("wiper-card.pdf")

})

}

return(

<div>

<div id="card" className="card">

<h3>Wiper Patriotic Front</h3>

<p>Diaspora Member</p>

<img src={qr} width="150"/>

<p>ID: {id}</p>

</div>

<button onClick={download}>
Download Card
</button>

</div>

)

}
