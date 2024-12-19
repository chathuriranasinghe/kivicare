import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

// Widget
import Title from '../../widgets/Title'
import ScrollingText from '../../widgets/ScrollingText'
import FancyBox from '../../widgets/FancyBox'

// Images
import chooseusbg from '/assets/images/general/banner-bg.png'
import doctor1 from '/assets/images/general/doctor.svg'
import treatment from '/assets/images/general/treatment.svg'
import service from '/assets/images/general/service.svg'

export default function HomeChooseUS() {
  const fancyBoxData = [
    {
        fancyboxImage: doctor1,
        fancyboxTitle: "Qualified Doctor",
        fancyboxDesc: "He is a person who holds a degree recognised by the Medical Council is registered",
        buttonUrl: "doctor-details"
    },
    {
        fancyboxImage: treatment,
        fancyboxTitle: "Trusted Treatment",
        fancyboxDesc: "Pasyale Wedamedura has many types of treatment to relieve symptoms for all types illness",
        buttonUrl: "service/wellness"
    },
    {
        fancyboxImage: service,
        fancyboxTitle: "24/7 Services",
        fancyboxDesc: "Pasyale Wedamedura is at your service 24×7 aiming to provide the best services of medical",
        buttonUrl: "about-us"
    }
  ]
  return (
    <div className="bg-primary-subtle section-padding section-why-choose rtl-image-flip" style={{background: `url(${chooseusbg})`, backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}>
        <Container className="position-relative rtl-image-flip-container">
            <ScrollingText scrollTitle="why choose us" />
            <div className="text-center">
                <Title subTitle="why choose us" rightText="trusted treatment " leftText="Solution" />
            </div>
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