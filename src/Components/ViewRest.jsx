import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
  
  } from 'mdb-react-ui-kit';
  import Accordion from 'react-bootstrap/Accordion';
  import { Link } from 'react-router-dom';
  import frontbackimg from '../frontbackimg.jpg'

import './ViewRest.css';

function ViewRest() {
   const {id}=useParams()
   const base_url="https://doctor-project-backend.onrender.com/doctors"
   const[restDetails,setRestDetails]=useState({})
    console.log(id);

    const fetchRestdetails=async()=>{
        const result=await axios.get(`${base_url}/${id}`)
        // console.log(result);
        setRestDetails(result.data)
    }
    console.log(restDetails);
    useEffect(()=>{
        fetchRestdetails()
    },[])
  return (
  <div>
    <div className="container viewcontainer">
    <CardGroup>
        <Card.Body style={{marginTop:"23px",marginLeft:"70px",boxshadow :" 0 3px 10px 0 #aaa"}}>
          <Card.Text>
          <MDBCard className='mx-3 my-4' style={{height:"250px",width:"250px",}}>
          <MDBCardBody>
            <MDBCardTitle><h3 style={{color:"red"}}>{restDetails.hospital}</h3></MDBCardTitle>
            <MDBCardText>
            <h5 style={{color:"blue"}}>{restDetails.name}</h5>
            <p>{restDetails.specialty}</p>
            <h6>{restDetails.phone}</h6>
            </MDBCardText>
          </MDBCardBody>
          </MDBCard>
          </Card.Text>
        </Card.Body>
     
    
        <Card.Body>
          <Card.Text>
          <MDBCard className='mx-3 my-4' style={{height:"300px",width:"350px",}}>
          <MDBCardBody>
            <MDBCardTitle><h3>{restDetails.hospital}</h3></MDBCardTitle>
            <MDBCardText>
             <p style={{borderBottom:"1px solid black"}}>{restDetails.address}</p>
            <div className="available">
              <p style={{borderBottom:"1px solid black"}}>available time:{restDetails.available_hours}</p>
              <p>available days:</p>
              <p style={{borderBottom:"1px solid black"}}>{`${restDetails.available_days},`}</p>
              <p style={{borderBottom:"1px solid black"}}>{restDetails.email}</p>
            </div>
            </MDBCardText>
          </MDBCardBody>
          </MDBCard> 
          </Card.Text>
        </Card.Body>   
    </CardGroup>  
        <div className="bottom">
        <Card>
      <Card.Header style={{color:"blueviolet"}}>REVIEWS</Card.Header>
      <Card.Body>
        <Card.Text>
        {
          restDetails.reviews?.map(item=>(
            <Accordion>
            <Accordion.Item eventKey={"0"}>
              <Accordion.Header> {item.patient_name}</Accordion.Header>
              <Accordion.Body>
                <p>{item.comments}</p>
                <p>{item.date}</p>
                <p><i class="fa-solid fa-star fa-fade" style={{color:"yellow"}}></i>{item.rating}</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          ))
        }
        </Card.Text>
        <Link to={`/`}>
        <Button variant="primary">GO BACK</Button>
       </Link>
      
      </Card.Body>
    </Card> 
        </div>

       </div>
    </div>
  )
}

export default ViewRest