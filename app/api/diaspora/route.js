import {members} from "../../../data/members"

export async function POST(req){

const data = await req.json()

const id = Date.now()

const member={
id,
...data
}

members.push(member)

return Response.json({
success:true,
id
})

}

export async function GET(){

return Response.json({
members
})

}
