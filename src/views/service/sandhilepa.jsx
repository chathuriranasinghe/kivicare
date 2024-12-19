import React, { Fragment } from 'react'
import { Col, Container, Row, Image, Accordion } from 'react-bootstrap'

// Images
import sandhilepa from '/assets/images/service/sandhilepa.png'

// widgets
import BreadCrumb from '../../components/partial/BreadCrumb'
import VideoPopup from '../../components/widgets/VideoPopup'
import Progressbar from '../../components/widgets/Progressbar'
import Faq from '../../components/widgets/Faq'

// Json
import { faqData } from '../../staticData/faqData'

export default function Sandhilepa() {
  return (
    <Fragment>
      <BreadCrumb title="Sandhilepa for Artharitis and Joint Pain" />
      <div className="section-padding service-details">
        <Container>
          <Row>
            <Col className="mt-lg-0 mt-5">
              <div className="about-service">
                <div className="position-relative d-flex justify-content-center align-items-center">
                  <Image src={sandhilepa} className="img-fluid" alt="image" />
                  <VideoPopup videoLinkUrl="https://youtu.be/lsBsXDwlhe8?si=ZVv_3ifn8rjUejoN" />
                </div>
                <div className="iq-title-box mt-5 mb-0">
                  <span className="iq-subtitle text-uppercase">DEPARTMENT</span>
                  <h3 className="iq-title iq-heading-title mb-2">
                    <span className="right-text text-capitalize fw-500">Sandhilepa </span>
                    <span className="left-text text-capitalize fw-light">Treatment </span>
                    <span className="right-text text-capitalize fw-500">for Artharitis and Joint Pain </span>
                  </h3>
                  <p className="iq-title-desc text-body">
                    Sandhilepa is a traditional Ayurvedic therapy that involves applying a medicated herbal paste to the joints and affected areas. This treatment is highly effective for relieving arthritis, joint pain, inflammation, and stiffness, promoting flexibility and mobility.</p>
                </div>
                <Row className="mt-5 align-items-center">
                  <Col md="6">
                    <ul className="list-inline m-0">
                      <li className="mb-2">
                        <div className="d-flex align-items-center gap-2">
                          <span className="text-primary"><i className="fas fa-check"></i></span>
                          <span>Relieves joint pain and stiffness</span>
                        </div>
                      </li>
                      <li className="mb-2">
                        <div className="d-flex align-items-center gap-2">
                          <span className="text-primary"><i className="fas fa-check"></i></span>
                          <span>Reduces inflammation and swelling</span>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex align-items-center gap-2">
                          <span className="text-primary"><i className="fas fa-check"></i></span>
                          <span>Improves joint mobility and flexibility</span>
                        </div>
                      </li>
                    </ul>
                  </Col>
                  <Col md="6" className="mt-md-0 mt-2">
                    <ul className="list-inline m-0">
                      <li className="mb-2">
                        <div className="d-flex align-items-center gap-2">
                          <span className="text-primary"><i className="fas fa-check"></i></span>
                          <span>Strengthens bones and muscles</span>
                        </div>
                      </li>
                      <li className="mb-2">
                        <div className="d-flex align-items-center gap-2">
                          <span className="text-primary"><i className="fas fa-check"></i></span>
                          <span>Enhances circulation in affected areas</span>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex align-items-center gap-2">
                          <span className="text-primary"><i className="fas fa-check"></i></span>
                          <span>Provides long-term relief from arthritis symptoms</span>
                        </div>
                      </li>
                    </ul>
                  </Col>
                </Row>
                <div className="pt-5">
                  <Row className="mt-5 align-items-center">
                    <Col md="6">
                      <div
                        className="counter"
                        style={{
                          backgroundColor: "rgb(226, 233, 250)",
                          padding: "20px",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center",
                          height: "200px",
                          borderRadius: "8px"
                        }}
                      >
                        <h2 className="counterValue" style={{ margin: "0" }}>Rs. 2900</h2>
                        <h5 className="counterText" style={{ margin: "10px 0 0" }}>Duration: 60 min</h5>
                      </div>


                    </Col>
                    <Col md="6" className="mt-md-0 mt-5">
                      <div>
                        <Progressbar progressTitle="Pain Relief" progressValue="91" />
                      </div>
                      <div className="mt-5">
                        <Progressbar progressTitle="Inflammation Reduction" progressValue="84" />
                      </div>
                      <div className="mt-5">
                        <Progressbar progressTitle="Improved Joint Flexibility" progressValue="75" />
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="mt-5 pt-md-3 pb-5 border-bottom">
                  <div className="iq-title-box mt-5 mb-0">
                    <span className="iq-subtitle text-uppercase">TIPS & INFO</span>
                    <h4 className="iq-title iq-heading-title mb-2">
                      <span className="right-text text-capitalize fw-500">Ayurvedic Tips For Healthy </span>
                      <span className="left-text text-capitalize fw-light">Children And
                        Families</span>
                    </h4>
                    <p className="iq-title-desc text-body">
                      Raising a family isn't always easy, but Ayurveda offers natural solutions for health and balance. Incorporating Ayurvedic principles into your family’s routine can help strengthen immunity, promote mental well-being, and ensure holistic development.
                    </p>
                  </div>
                </div>
                <div className="mt-5 pt-3">
                  <div className="accordion" id="main-faq">
                    <Accordion defaultActiveKey={faqData[0]?.uniqid} className="mb-3">
                      {faqData.slice(0, 3).map((item, index) => (
                        <Faq key={index} uniqid={item.uniqid} faqTitle={item.faqTitle} faqdesc={item.faqdesc} />
                      ))}
                    </Accordion>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  )
}


