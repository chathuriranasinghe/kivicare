import React, { Fragment } from 'react'
import { Col, Container, Row, Image, Accordion } from 'react-bootstrap'

// Images
import weightloss from '/assets/images/service/weightloss.png'

// widgets
import BreadCrumb from '../../components/partial/BreadCrumb'
import ServiceMenu from '../../components/widgets/ServiceMenu'
import ServiceSidebar from '../../components/widgets/ServiceSidebar'
import VideoPopup from '../../components/widgets/VideoPopup'
import Counter from '../../components/widgets/Counter'
import Progressbar from '../../components/widgets/Progressbar'
import Faq from '../../components/widgets/Faq'

// Json
import { faqData } from '../../staticData/faqData'

export default function WeightLoss() {
  return (
    <Fragment>
      <BreadCrumb title="Special Weight Loss Treatment" />
      <div className="section-padding service-details">
        <Container>
          <Row>
            <Col className="mt-lg-0 mt-5">
              <div className="about-service">
                <div className="position-relative d-flex justify-content-center align-items-center">
                  <Image src={weightloss} className="img-fluid" alt="image" />
                  <VideoPopup videoLinkUrl="https://youtu.be/lsBsXDwlhe8?si=ZVv_3ifn8rjUejoN" />
                </div>
                <div className="iq-title-box mt-5 mb-0">
                  <span className="iq-subtitle text-uppercase">DEPARTMENT</span>
                  <h3 className="iq-title iq-heading-title mb-2">
                    <span className="right-text text-capitalize fw-500">Special Weight Loss </span>
                    <span className="left-text text-capitalize fw-light">Treatment</span>
                  </h3>
                  <p className="iq-title-desc text-body">
                    Our Special Weight Loss Treatment is a customized, holistic approach designed to help you achieve your weight loss goals effectively and sustainably. Combining advanced techniques, personalized nutrition plans, and targeted therapies, this treatment promotes fat reduction, boosts metabolism, and improves overall health, ensuring long-lasting results.</p>
                </div>
                <Row className="mt-5 align-items-center">
                  <Col md="6">
                    <ul className="list-inline m-0">
                      <li className="mb-2">
                        <div className="d-flex align-items-center gap-2">
                          <span className="text-primary"><i className="fas fa-check"></i></span>
                          <span>Personalized weight loss plans tailored to individual needs</span>
                        </div>
                      </li>
                      <li className="mb-2">
                        <div className="d-flex align-items-center gap-2">
                          <span className="text-primary"><i className="fas fa-check"></i></span>
                          <span>Body contouring and fat reduction therapies</span>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex align-items-center gap-2">
                          <span className="text-primary"><i className="fas fa-check"></i></span>
                          <span>Metabolism-boosting treatments for faster fat burning</span>
                        </div>
                      </li>
                    </ul>
                  </Col>
                  <Col md="6" className="mt-md-0 mt-2">
                    <ul className="list-inline m-0">
                      <li className="mb-2">
                        <div className="d-flex align-items-center gap-2">
                          <span className="text-primary"><i className="fas fa-check"></i></span>
                          <span>Detoxification to cleanse the body and support weight loss</span>
                        </div>
                      </li>
                      <li className="mb-2">
                        <div className="d-flex align-items-center gap-2">
                          <span className="text-primary"><i className="fas fa-check"></i></span>
                          <span>Nutritional counseling for a balanced and healthy lifestyle</span>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex align-items-center gap-2">
                          <span className="text-primary"><i className="fas fa-check"></i></span>
                          <span>Stress reduction techniques to prevent emotional eating</span>
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
                        <h2 className="counterValue" style={{ margin: "0" }}>Rs. 8900</h2>
                        <h5 className="counterText" style={{ margin: "10px 0 0" }}>Duration: 90 min</h5>
                      </div>


                    </Col>
                    <Col md="6" className="mt-md-0 mt-5">
                      <div>
                        <Progressbar progressTitle="Fat Reduction and Body Contouring" progressValue="91" />
                      </div>
                      <div className="mt-5">
                        <Progressbar progressTitle="Metabolism Boost and Fat Burning" progressValue="84" />
                      </div>
                      <div className="mt-5">
                        <Progressbar progressTitle="Overall Weight Loss Progress" progressValue="75" />
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
