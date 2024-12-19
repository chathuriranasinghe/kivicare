import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

// Widget
import FancyBox from '../../widgets/FancyBox';

// Images
import doctor1 from '/assets/images/general/doctor.svg'
import treatment from '/assets/images/general/treatment.svg'
import service from '/assets/images/general/service.svg'

export default function AboutIconBox() {
  const fancyBoxData = [
    {
      fancyboxImage: doctor1,
      fancyboxTitle: "Qualified Doctor",
      fancyboxDesc: "He is a person who holds a degree recognised by the Medical Council is registered",
      buttonUrl: "/doctor-details"
    },
    {
      fancyboxImage: treatment,
      fancyboxTitle: "Trusted Treatment",
      fancyboxDesc: "Pasyale Wedamedura has many types of treatment to relieve symptoms for all types illness",
      buttonUrl: "/service/wellness"
    },
    {
      fancyboxImage: service,
      fancyboxTitle: "24/7 Services",
      fancyboxDesc: "Pasyale Wedamedura is at your service 24×7 aiming to provide the best services of medical",
      buttonUrl: "/about-us"
    }
  ]
  return (
    <div className="section-padding">
      <Container className="position-relative">
        <Row className="pt-5 gy-5">
          {fancyBoxData.map((item, index) => (
            <Col lg="4" md="6" className="text-center" key={index}>
              <FancyBox fancyboxImage={item.fancyboxImage} fancyboxTitle={item.fancyboxTitle} fancyboxDesc={item.fancyboxDesc} buttonUrl={item.buttonUrl} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}
