import React from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'

// Widget
import Title from '../../widgets/Title'
import ScrollingText from '../../widgets/ScrollingText'
import ButtonBox from '../../widgets/ButtonBox'
import IconboxTransprent from '../../widgets/IconboxTransprent'

export default function HomeService() {
  const ServiceData = [
    {
        iconClass: "flaticon-in-love",
        iconboxTitle: "Free Consultation",
        iconboxDesc: "Get expert health advice at no cost. Our specialists are here to guide you toward a healthier and happier life.",
        buttonUrl: "service/beauty_package"
    },
    {
        iconClass: "flaticon-insurance",
        iconboxTitle: "Home Health Services",
        iconboxDesc: "Receive quality healthcare services in the comfort of your home, ensuring personalized care for your needs.",
        buttonUrl: "service/wellness"
    },
    {
        iconClass: "flaticon-thumbs-up",
        iconboxTitle: "Minor Procedures",
        iconboxDesc: "We provide safe and efficient minor medical procedures, focusing on quick recovery and minimal discomfort.",
        buttonUrl: "service/januwasthi"
    }
  ]
  return (
    <div className="section-service-box bg-secondary-subtle section-padding position-relative">
        <Container className="position-relative title-content">
            <Row>
                <Col lg="6">
                    <ScrollingText scrollTitle="Our Services" />
                    <Title subTitle="Services" leftText="Services." rightText="We Provide Medical " titleDescription="Book Your Treatment Appointment Today. Male to Male , Female to Female Theraphists Only." />
                    <div className="mt-3 mb-5">
                        <ButtonBox buttonUrl="https://admin.wedameduraayurveda.com/quick-booking" buttonText="Book Now" />
                    </div>
                </Col>
                <Col lg="6" className="d-lg-block d-none"></Col>
            </Row>
            <Card className="mb-0">
                <Card.Body className="p-0">
                    <Row>
                        {ServiceData.map((item, index) => (
                            <Col lg="4" md="6" className={index === ServiceData.length - 1 ? '' : 'iq-box-right-border'} key={index}>
                                <IconboxTransprent isBorder={true} isIcon={true} iconClass={item.iconClass} iconboxTitle={item.iconboxTitle} iconboxDesc={item.iconboxDesc} buttonUrl={item.buttonUrl} />
                            </Col>
                        ))}                                
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    </div>
  )
}
