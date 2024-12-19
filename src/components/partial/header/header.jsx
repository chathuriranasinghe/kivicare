import React, { useEffect, memo, Fragment, useState } from 'react'
import { Col, Nav, Row, Navbar, Dropdown, Form, Card, Button, Collapse } from 'react-bootstrap';
import Swal from 'sweetalert2';

// widget
import Logo from '../../widgets/Logo';
import HorizontalNav from './HorizontalNav';
import ButtonBox from '../../widgets/ButtonBox';
import MegaMenu from './megaMenu';
import SocialMedia from '../../widgets/SocialMedia';
import Sidebar from '../../widgets/Sidebar';

// Component
import CustomToggle from '../../bootstrap/Dropdowns';

// Images
import LandingOffcanvasHeader from './offcanvas-header';
import { Link } from 'react-router-dom';


const Header = memo(({ logoDynamic, IsMegaMenu }) => {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [isNavbarFixed, setNavbarFixed] = useState(false);
    const [dropdownhandler, setdropdownhandler] = useState(false)
    const handleScroll = () => {
        const scroll = window.scrollY;

        if (scroll >= 100) {
            setNavbarFixed(true);
        } else {
            setNavbarFixed(false);
        }
    };

    const handleDeleteClick = (event) => {
        const clickedButton = event.currentTarget;
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this item",
            icon: 'error',
            showCancelButton: true,
            backdrop: `rgba(60,60,60,0.8)`,
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                clickedButton.closest('[data-item="list"]').remove();
                Swal.fire(
                    'Deleted!',
                    'Your item has been deleted.',
                    'success'
                );
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarClassName = `iq-navbar ${isNavbarFixed ? 'fixed' : ''}`;




    return (
        <Fragment>
            <header>
                <div className="top-header bg-soft-light d-none d-md-block">
                    <div className="container-fluid">
                        <Row className="align-items-center">
                            <Col lg="7" md="6">
                                <ul className="top-header-left list-inline d-flex align-items-center gap-3 m-0">
                                    <li className="text-body">
                                        <a className="text-body d-flex align-items-center" href="tel:480-555-0103">
                                            <svg className="icon-18 text-dark me-1" width="32" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd"
                                                    d="M11.5317 12.4724C15.5208 16.4604 16.4258 11.8467 18.9656 14.3848C21.4143 16.8328 22.8216 17.3232 19.7192 20.4247C19.3306 20.737 16.8616 24.4943 8.1846 15.8197C-0.493478 7.144 3.26158 4.67244 3.57397 4.28395C6.68387 1.17385 7.16586 2.58938 9.61449 5.03733C12.1544 7.5765 7.54266 8.48441 11.5317 12.4724Z"
                                                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                                    strokeLinejoin="round"></path>
                                            </svg>
                                            <span>+ (94) 773-674-288</span>
                                        </a>
                                    </li>
                                    <li className="text-body d-flex align-items-center">
                                        <svg className="icon-18 text-dark me-1" width="32" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                d="M14.5 10.5005C14.5 9.11924 13.3808 8 12.0005 8C10.6192 8 9.5 9.11924 9.5 10.5005C9.5 11.8808 10.6192 13 12.0005 13C13.3808 13 14.5 11.8808 14.5 10.5005Z"
                                                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                                strokeLinejoin="round"></path>
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                d="M11.9995 21C10.801 21 4.5 15.8984 4.5 10.5633C4.5 6.38664 7.8571 3 11.9995 3C16.1419 3 19.5 6.38664 19.5 10.5633C19.5 15.8984 13.198 21 11.9995 21Z"
                                                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                                strokeLinejoin="round"></path>
                                        </svg>
                                        <span>170/A, Tiverton, Colombo Road, Peradeniya</span>
                                    </li>
                                </ul>
                            </Col>
                            <Col lg="5" md="6" className="text-md-end">
                                <SocialMedia customClass="justify-content-end" />
                            </Col>
                        </Row>
                    </div>
                </div>
                <Nav className={`nav navbar navbar-expand-xl navbar-light iq-navbar header-hover-menu py-xl-0 ${navbarClassName}`}>
                    <div className="container-fluid navbar-inner">
                        <div className="d-flex align-items-center justify-content-between w-100 landing-header">
                            <div className="d-flex gap-3 gap-xl-0 align-items-center">
                                <div>
                                    <LandingOffcanvasHeader logoDynamic={logoDynamic} />
                                </div>
                                {/* logo */}
                                <Logo logoDynamic={true} logoImage={logoDynamic} />

                                {/* menu */}
                                {IsMegaMenu ? (
                                    <MegaMenu />
                                ) : (
                                    <HorizontalNav />
                                )}

                            </div>
                            <div className="right-panel">
                                <Button id="navbar-toggle" bsPrefix="navbar-toggler" type="button" aria-expanded={show1} data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" onClick={() => setShow1(!show1)}
                                >
                                    <span className="navbar-toggler-btn">
                                        <span className="navbar-toggler-icon"></span>
                                    </span>
                                </Button>
                                <div className={`navbar-collapse ${show1 === true ? "collapse show" : "collapse"}`} id="navbarSupportedContent">
                                    <ul className="navbar-nav align-items-center ms-auto mb-2 mb-xl-0">
                                        <Dropdown as="li" className="nav-item d-xl-block">
                                            <Dropdown.Toggle as={CustomToggle} href="#" className="nav-link" variant=" nav-link"
                                                id="notification-drop" data-bs-toggle="dropdown">
                                                <div className="nav-list-icon">
                                                    <div className="btn-inner">
                                                        <svg className="icon-20" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" strokeWidth="1.5"
                                                                strokeLinecap="round" strokeLinejoin="round"></circle>
                                                            <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" strokeWidth="1.5"
                                                                strokeLinecap="round" strokeLinejoin="round"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="p-0 sub-drop dropdown-menu-end" aria-labelledby="notification-drop">
                                                <div className="form-group input-group mb-0 search-input">
                                                    <Form.Control type="text" placeholder="Search..." />
                                                    <span className="input-group-text">
                                                        <svg className="icon-20" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                                                            <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown as="li" className="nav-item">
                                            <Dropdown.Toggle as={CustomToggle} variant=" nav-link d-flex align-items-center" href="#"
                                                id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <div className="btn-inner btn-icon btn-sm position-relative">
                                                    <svg className="user-icons" xmlns="http://www.w3.org/2000/svg" width="20" height="21"
                                                        viewBox="0 0 20 21" fill="none">
                                                        <mask maskUnits="userSpaceOnUse" x="3" y="12" width="14" height="7">
                                                            <path fillRule="evenodd" clipRule="evenodd"
                                                                d="M3.33203 12.3041H16.5319V18.4491H3.33203V12.3041Z" fill="white"></path>
                                                        </mask>
                                                        <g>
                                                            <path fillRule="evenodd" clipRule="evenodd"
                                                                d="M9.93286 13.5541C6.38203 13.5541 4.58203 14.1641 4.58203 15.3682C4.58203 16.5832 6.38203 17.1991 9.93286 17.1991C13.4829 17.1991 15.282 16.5891 15.282 15.3849C15.282 14.1699 13.4829 13.5541 9.93286 13.5541ZM9.93286 18.4491C8.30036 18.4491 3.33203 18.4491 3.33203 15.3682C3.33203 12.6216 7.09953 12.3041 9.93286 12.3041C11.5654 12.3041 16.532 12.3041 16.532 15.3849C16.532 18.1316 12.7654 18.4491 9.93286 18.4491Z"
                                                                fill="currentColor"></path>
                                                        </g>
                                                        <mask maskUnits="userSpaceOnUse" x="5" y="1" width="10" height="10">
                                                            <path fillRule="evenodd" clipRule="evenodd"
                                                                d="M5.50781 1.89075H14.3578V10.7396H5.50781V1.89075Z" fill="white"></path>
                                                        </mask>
                                                        <g>
                                                            <path fillRule="evenodd" clipRule="evenodd"
                                                                d="M9.93367 3.08038C8.14951 3.08038 6.69784 4.53121 6.69784 6.31538C6.69201 8.09371 8.13284 9.54371 9.9095 9.55038L9.93367 10.1454V9.55038C11.717 9.55038 13.1678 8.09871 13.1678 6.31538C13.1678 4.53121 11.717 3.08038 9.93367 3.08038ZM9.93367 10.7395H9.90701C7.47201 10.732 5.49951 8.74622 5.50784 6.31288C5.50784 3.87538 7.49284 1.89038 9.93367 1.89038C12.3737 1.89038 14.3578 3.87538 14.3578 6.31538C14.3578 8.75538 12.3737 10.7395 9.93367 10.7395Z"
                                                                fill="currentColor"></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu dropdown-menu-end dropdown-user"
                                                aria-labelledby="navbarDropdown">
                                                <Dropdown.Item as={Link} to={'./auth/login'} className="border-bottom"> Sign in </Dropdown.Item>
                                                <Dropdown.Item as={Link} to={'./auth/registration'}> Sign up </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <div style={{ display: 'flex', gap: '10px' }}>
                                            <ButtonBox buttonUrl="https://admin.wedameduraayurveda.com" buttonText="Dashboard" />
                                            <ButtonBox buttonUrl="https://admin.wedameduraayurveda.com/quick-booking" buttonText="Appointment" />
                                        </div>



                                        <li className="ps-3">
                                            <Button variant="" onClick={handleShow} className="cursor-pointer p-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="22" viewBox="0 0 28 22" fill="none">
                                                    <path d="M0 0H24V2H0V0Z" fill="#171C26" />
                                                    <path d="M4 10H28V12H4V10Z" fill="#171C26" />
                                                    <path d="M0 20H24V22H0V20Z" fill="#171C26" />
                                                </svg>
                                            </Button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Nav>
            </header>
            <Sidebar show={show} handleClose={handleClose} targetId="right-panel-toggle" logoDynamic={logoDynamic} />
        </Fragment>
    )
})

export default Header;