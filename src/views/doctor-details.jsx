import React, { Fragment } from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

// Images
import shortLogo from '/assets/images/pages/short-logo.png'

// widget
import TeamOverdetail from '../components/widgets/TeamOverdetail';
import BreadCrumb from '../components/partial/BreadCrumb';

// json
import { teamData } from '../staticData/team'
import Progressbar from '../components/widgets/Progressbar';

// Redux Selector / Action
import { useSelector } from "react-redux";
import { theme_scheme_direction } from '../store/setting/selectors';
import BackToTop from '../components/partial/BackToTop';

export default function DoctorDetails() {
  const themeSchemeDirection = useSelector(theme_scheme_direction);

  return (
    <Fragment>
      <BreadCrumb title="Doctor Details" />
      <div className="section-padding team-detail">
        <Container>
          <Row className="gy-4">
            <Col lg="4">
              <div className="team-member-info">
                {teamData.slice(0, 1).map((item, index) => (
                  <TeamOverdetail key={index} teamImage={item.teamImage} teamMemberName={item.teamMemberName} teamSpecialized={item.teamSpecialized} />
                ))}
              </div>
              <div className="mt-5 sidebar-widget-working-hour bg-secondary-subtle text-body p-3 p-md-5">
                <div className="icon mb-4">
                  <i className="far fa-clock"></i>
                </div>
                <h4 className="mb-3 fw-500">Opening Time</h4>
                <ul className="list-inline m-0">
                  <li className="mb-2 pb-2 border-bottom d-flex align-items-center justify-content-between">
                    <span>Monday - Thursday</span>
                    <span>9:00 - 6:00 pm</span>
                  </li>
                  <li className="mb-2 pb-2 border-bottom d-flex align-items-center justify-content-between">
                    <span>Saturday</span>
                    <span>9:00 - 7:00 pm </span>
                  </li>
                  <li className="mb-2 pb-2 border-bottom d-flex align-items-center justify-content-between">
                    <span>Sunday</span>
                    <span>9:00 - 2:00 pm </span>
                  </li>
                  <li className="d-flex align-items-center justify-content-between">
                    <span>Friday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg="8">
              <div className="iq-title-box">
                <h3 className="iq-title iq-heading-title mb-3">
                  <span className="right-text text-capitalize">Ayurvedic </span>
                  <span className="left-text text-capitalize fw-light">Doctor</span>
                </h3>
                <p className="iq-title-desc text-body">
                Inspired by over 75 years of traditional Ayurvedic medicine, Pasyale Wedamedura combines the timeless healing techniques of Gampaha Siddhayurveda with a deep commitment to holistic well-being. With 25+ years of experience, Dr. Damith Ganegoda continues the legacy of traditional Ayurvedic care, bringing natural healing solutions to life.</p>
              </div>
              <Row>
                <Col md="6">
                  <h5 className="fw-normal">Honors and Awards </h5>
                  <Row className="mt-5 g-3">
                    <Col sm="6" className="mt-0">
                      <div className="px-3 pt-2 pb-3 border">
                        <div className="text-primary">
                          <i aria-hidden="true" className="flaticon flaticon-flaticon flaticon-award"></i>
                        </div>
                        <h6 className="mt-1 mb-0">2020 Traditional Medicine Excellence Award</h6>
                      </div>
                    </Col>
                    <Col sm="6" className="mt-4 mt-sm-0">
                      <div className="px-3 pt-2 pb-3 border">
                        <div className="text-primary">
                          <i aria-hidden="true" className="flaticon flaticon-flaticon flaticon-award"></i>
                        </div>
                        <h6 className="mt-1 mb-0">2016 Best Herbal Skincare Treatment Award</h6>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col md="6" className="mt-4 mt-sm-0">
                  <h5 className="fw-normal">Skillset</h5>
                  <div className="mt-5">
                    <Progressbar progressTitle="Technique" progressValue="90" />
                  </div>
                  <div className="mt-5">
                    <Progressbar progressTitle="Empathy" progressValue="95" />
                  </div>
                  <div className="mt-5">
                    <Progressbar progressTitle="Operation" progressValue="85" />
                  </div>
                </Col>
              </Row>
              <div className="mt-5 px-5 py-3 border">
                <Row className="align-items-center">
                  <Col md="2">
                    <h5 className="m-0">Specialty</h5>
                  </Col>
                  <Col md="10" className="mt-md-0 mt-2">
                    <span className="text-primary"><i className="far fa-star"></i></span>
                    <span className="ms-1">Expert in Panchakarma Detox and rejuvenation therapies</span>
                  </Col>
                </Row>
              </div>
              <div className="mt-3 px-5 py-3 border">
                <div className="row align-items-center">
                  <div className="col-md-2">
                    <h5 className="m-0">Education</h5>
                  </div>
                  <div className="col-md-10 mt-md-0 mt-2">
                    <ul className="list-inline m-0">
                      <li className="mb-2">
                        <span className="text-primary"><i className="fas fa-check"></i></span>
                        <span className="ms-1">Bachelor of Ayurveda Medicine and Surgery (BAMS) – University of Colombo, Sri Lanka</span>
                      </li>
                      <li>
                        <span className="text-primary"><i className="fas fa-check"></i></span>
                        <span className="ms-1">Advanced studies in Ayurvedic Herbal Medicine and Therapy</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-3 px-5 py-3 border">
                <div className="row align-items-center">
                  <div className="col-md-2">
                    <h5 className="m-0">Experience</h5>
                  </div>
                  <div className="col-md-10 mt-md-0 mt-2">
                    <span className="text-primary"><i className="fas fa-file-alt"></i></span>
                    <span className="ms-1">Over 25 years of experience in Ayurvedic medicine</span>
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
