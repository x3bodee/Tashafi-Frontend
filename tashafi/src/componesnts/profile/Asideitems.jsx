import React from 'react'
import {AssignmentTurnedIn , AssignmentInd  , Devices ,RateReview} from '@material-ui/icons'

export  const Asideitems =[
{
    title:"My Profile",
    icon:<AssignmentInd/>,
    value:"profile",
    // onClick:(e)=>{clickhandel(e)}
},
{
    title:"My Booking",
    icon:<AssignmentTurnedIn/>,
    render:""
},
{
    title:"My Sessions",
    icon:<Devices/>,
    render:""
},
{
    title:"My Reviews",
    icon:<RateReview/>,
    render:""
}
]  
   


