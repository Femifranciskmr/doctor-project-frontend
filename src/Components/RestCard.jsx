import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
   
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import './RestCard.css';

function RestCard({doctors}) {
    console.log(doctors);//data
  return (
    <div>
        <div className='restcontainer m-3'>
        <MDBCard className='mx-3 my-3' style={{height:"240px"}}>
      <MDBCardBody>
        <MDBCardTitle><h5 style={{display:"flex",justifyContent:"center"}}>{doctors.hospital}</h5></MDBCardTitle>
        <MDBCardText>
        <h6 style={{display:"flex",justifyContent:"center"}}>{doctors.name}</h6>
        <p style={{display:"flex",justifyContent:"center"}}>{doctors.specialty}</p>
        <h6 style={{display:"flex",justifyContent:"center"}}><i class="fa-solid fa-star fa-fade" style={{color:"yellow"}}></i>{doctors.rating}</h6>
        </MDBCardText>
       <Link to={`view/${doctors.id}`}>
        <div style={{display:"flex",justifyContent:"center"}} >
        <button type="button" class="btn btn-primary">MORE DETAILS</button> 
        </div>
       </Link>
      </MDBCardBody>
    </MDBCard>
        </div>
    </div>
  )
}

export default RestCard