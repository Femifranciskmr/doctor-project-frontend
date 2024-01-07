import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RestCard from './RestCard';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';

function AllRest() {
    const base_url="https://doctor-project-backend.onrender.com/doctors"
    const[AllRestData,setAllRestData]=useState([])
    const fetchData=async()=>{
        const result=await axios.get(base_url)
        setAllRestData(result.data)
    }

    console.log(AllRestData);
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div>
        <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src='https://c1.wallpaperflare.com/preview/921/41/67/doctor-patient-university-of-arizona-pediatrics.jpg' className='d-block w-100' alt='...' height={'400px'} />
        <MDBCarouselCaption>
          <h5>caring of life</h5>
          <p>make your appointment today</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src='https://e0.pxfuel.com/wallpapers/530/310/desktop-wallpaper-want-to-know-about-other-medical-equipment-financing-options.jpg' className='d-block w-100' alt='...' height={'400px'} />
        <MDBCarouselCaption>
          <h5>caring of life</h5>
          <p>make your appointment today</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src='https://english.mathrubhumi.com/image/contentid/policy:1.5792260:1685786788/image.jpg?$p=0f6e831&f=4x3&w=1080&q=0.8' className='d-block w-100' alt='...' height={'400px'}/>
        <MDBCarouselCaption>
          <h5>caring of life</h5>
          <p>make your appointment today</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>

        <Row>

            {
               AllRestData.map((itm)=>(
               <Col sm={12} md={6} lg={4} xl={3}>
               <RestCard doctors={itm}/>
               </Col>
               )) 
            }
        </Row>
    </div>
  )
}

export default AllRest