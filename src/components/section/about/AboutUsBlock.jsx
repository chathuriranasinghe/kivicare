import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';

// Widgets
import Title from '../../widgets/Title';
import ScrollingText from '../../widgets/ScrollingText';
import Progressbar from '../../widgets/Progressbar';

// Images
import aboutBanner from '/assets/images/pages/about-banner.png'

export default function AboutUsBlock() {
    const prograssData = [
        {
          progressTitle: "Authenticity in Ayurveda",
          progressValue: "100"
        },
        {
          progressTitle: "Empathy and Personalized Care",
          progressValue: "95"
        },
        {
          progressTitle: "Traditional Hygiene and Comfort",
          progressValue: "98"
        }
    ]
  return (
    <div className="bg-primary-subtle section-padding">
        <Container className="position-relative">
        <Row>
            <Col md="6" className="pe-md-5">
            <ScrollingText scrollTitle="about us" />
            <Title subTitle="about pasyale wedamedura" rightText="Health " leftText="Commitments" titleDescription="At Pasyale Wedamedura, we are dedicated to restoring balance and harmony through time-tested Ayurvedic treatments. Our mission is to provide personalized healing experiences rooted in ancient wisdom while blending modern advancements to ensure optimal well-being." />
            <div className="block-progressbar">
                <ul className="list-inline m-0">
                {prograssData.map((item, index) => (
                    <li className="mb-4" key={index}>
                    <Progressbar progressTitle={item.progressTitle} progressValue={item.progressValue} />
                    </li>
                ))}                    
                </ul>
            </div>
            <div className="d-flex gap-4 mt-5 flex-column flex-lg-row mb-5 mb-md-0">
                <div>
                <h4 className="fw-normal">Damith Ganegoda</h4>
                <p className="text-primary text-uppercase fw-bold">CEO & Founder</p>
            </div>
            
            </div>
            </Col>
            <Col md="6">
            <Image src={aboutBanner} alt="banner" className="img-fluid" />
            </Col>
        </Row>
        </Container>
    </div>
  )
}
