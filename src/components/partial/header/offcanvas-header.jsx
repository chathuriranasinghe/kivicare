import React, { Fragment, memo, useState } from "react";
import { Button, Container, Nav, Offcanvas, Collapse } from 'react-bootstrap';
import { Link, useLocation } from "react-router-dom";
import Logo from "../../widgets/Logo";
// routers
import { IndexRouter } from '../../../router/indexRouter';

const LandingOffcanvasHeader = memo(({ logoDynamic }) => {
    const [open, setOpen] = useState(false);
    let location = useLocation();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    const [open7, setOpen7] = useState(false);
    const [open8, setOpen8] = useState(false);
    const [open9, setOpen9] = useState(false);
    const [open10, setOpen10] = useState(false);
    const [open11, setOpen11] = useState(false);
    const [open12, setOpen12] = useState(false);
    const [open13, setOpen13] = useState(false);


    //optimized code 
    const route = IndexRouter.slice(0)
        .flatMap(element => element.children.map(child => ({ element, child }))).find(({ element, child }) => {
            const path = element.path === "" ? `${child.path}` : `${child.path}`;
            return path === location.pathname;
        });

    // active link
    const ActiveLink = route ? route.child.Activelink : undefined

    return (
        <Fragment>

            <Button data-trigger="navbar_main"
                className="d-xl-none rounded-pill p-1 pt-0 toggle-rounded-btn"
                type="button"
                variant="primary" onClick={handleShow}>
                <svg width="20px" height="20px" viewBox="0 0 24 24" className="icon-20">
                    <path
                        fill="currentColor"
                        d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"                        ></path>
                </svg>
            </Button>

            <Offcanvas show={show} onHide={handleClose} className="mobile-offcanvas nav navbar navbar-expand-xl hover-nav horizontal-nav mega-menu-content py-xl-0">
                <Container fluid className="p-lg-0 ps-md-3">
                    <Offcanvas.Header closeButton className="p-0">
                        <div className="offcanvas-header p-0">
                            <Logo logoDynamic={true} logoImage={logoDynamic} />
                        </div>
                    </Offcanvas.Header>
                    <ul className="navbar-nav iq-nav-menu list-unstyled">
                        <Nav.Item as="li">
                            <Nav.Item as="li">
                                <Nav.Link href="/" role="button">
                                    <span className="item-name">Home</span>
                                </Nav.Link>
                            </Nav.Item>

                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link onClick={() => setOpen1(!open1)} aria-controls="allPages" aria-expanded={open1} role="button" className={` ${location.pathname === "/tab-two-column" || location.pathname === '/tab-three-column' || location.pathname === '/doctor-details' || location.pathname === '/service/service1' || location.pathname === '/service/service' ? 'active' : ''}`}>
                                <span className="item-name">PAGES</span>{" "}
                                <span className="menu-icon">
                                    <svg width="10" height="10" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 0.5C4.27614 0.5 4.5 0.723858 4.5 1V4H7.5C7.77614 4 8 4.22386 8 4.5C8 4.77614 7.77614 5 7.5 5H4.5V8C4.5 8.27614 4.27614 8.5 4 8.5C3.72386 8.5 3.5 8.27614 3.5 8V5H0.5C0.223858 5 0 4.77614 0 4.5C0 4.22386 0.223858 4 0.5 4H3.5V1C3.5 0.723858 3.72386 0.5 4 0.5Z" fill="currentColor" />
                                    </svg>
                                </span>
                            </Nav.Link>
                            <Collapse in={open1}>
                                <ul className="sub-nav collapse  list-unstyled" id="allPages">
                                    <Nav.Item as="li" className="nav-item">
                                        <Nav.Link as={Link} to="/doctor-details" role="button">
                                            <span className="item-name">Doctor Details</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Link className={`${location.pathname === '/about-us' ? 'active' : ''} nav-link `} to="/about-us"> about-us </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item">
                                        <Link className={`${location.pathname === '/faq-page' ? 'active' : ''} nav-link `} to="/faq-page"> FAQ </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Link className={`${location.pathname === '/contact-us' ? 'active' : ''} nav-link `} to="/contact-us"> contact us </Link>
                                    </Nav.Item>
                                </ul>
                            </Collapse>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link onClick={() => setOpen5(!open5)} aria-controls="specializationPages" aria-expanded={open5} role="button" >
                                <span className="item-name">Services</span>{" "}
                                <span className="menu-icon">
                                    <svg width="10" height="10" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 0.5C4.27614 0.5 4.5 0.723858 4.5 1V4H7.5C7.77614 4 8 4.22386 8 4.5C8 4.77614 7.77614 5 7.5 5H4.5V8C4.5 8.27614 4.27614 8.5 4 8.5C3.72386 8.5 3.5 8.27614 3.5 8V5H0.5C0.223858 5 0 4.77614 0 4.5C0 4.22386 0.223858 4 0.5 4H3.5V1C3.5 0.723858 3.72386 0.5 4 0.5Z" fill="currentColor" />
                                    </svg>
                                </span>
                            </Nav.Link>
                            <Collapse in={open5} >
                                <ul className="sub-nav collapse  list-unstyled" id="specializationPages">
                                    <Nav.Item as="li" className="nav-item">
                                        <Link className={`${location.pathname === '/januwasthi' ? 'active' : ''} nav-link `} to="service/januwasthi"> Janu Wasthi </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item">
                                        <Link className={`${location.pathname === '/kasiwasthi' ? 'active' : ''} nav-link `} to="service/kasiwasthi"> Kasi Wasthi </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item">
                                        <Link className={`${location.pathname === '/urowasthi' ? 'active' : ''} nav-link `} to="service/urowasthi"> Uro Wasthi </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item">
                                        <Link className={`${location.pathname === '/shirowasthi' ? 'active' : ''} nav-link `} to="service/shirowasthi"> Shiro Wasthi </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item">
                                        <Link className={`${location.pathname === '/wellness' ? 'active' : ''} nav-link `} to="service/wellness"> Special Wellness Package </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item">
                                        <Link className={`${location.pathname === '/mukhalepa' ? 'active' : ''} nav-link `} to="service/mukhalepa"> Mukha Lepa Treatment </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item">
                                        <Link className={`${location.pathname === '/foot_massage' ? 'active' : ''} nav-link `} to="service/foot_massage"> Foot Massage </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item">
                                        <Link className={`${location.pathname === '/head_massage' ? 'active' : ''} nav-link `} to="service/head_massage"> Head Massage </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item">
                                        <Link className={`${location.pathname === '/nasya_treatment' ? 'active' : ''} nav-link `} to="service/nasya_treatment"> Nasya Treatment </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item">
                                        <Link className={`${location.pathname === '/sandhilepa' ? 'active' : ''} nav-link `} to="service/sandhilepa"> Sandhilepa Treament </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item">
                                        <Link className={`${location.pathname === '/shirolepa' ? 'active' : ''} nav-link `} to="service/shirolepa"> Shirolepa Treatment </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item">
                                        <Link className={`${location.pathname === '/pindosweda_treatment' ? 'active' : ''} nav-link `} to="service/pindosweda_treatment"> Pindosweda Treatment </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item">
                                        <Link className={`${location.pathname === '/beauty_package' ? 'active' : ''} nav-link `} to="service/beauty_package"> Special Beauty Package </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item">
                                        <Link className={`${location.pathname === '/weightloss' ? 'active' : ''} nav-link `} to="service/weightloss"> Special Weight Loss Treatment </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item">
                                        <Link className={`${location.pathname === '/massage_steambath' ? 'active' : ''} nav-link `} to="service/massage_steambath"> Full Body Massage with Steambath </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item">
                                        <Link className={`${location.pathname === '/steambath' ? 'active' : ''} nav-link `} to="service/steambath"> Steambath </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item">
                                        <Link className={`${location.pathname === '/fullbody_massage' ? 'active' : ''} nav-link `} to="service/fullbody_massage"> Full Body Massage </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item">
                                        <Link className={`${location.pathname === '/shirodhara' ? 'active' : ''} nav-link `} to="service/shirodhara"> Shirodhara Treatment </Link>
                                    </Nav.Item>
                                </ul>
                            </Collapse>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="/blog/blog-lists" role="button">
                                <span className="item-name">Blog</span>
                            </Nav.Link>
                        </Nav.Item>
                    </ul>
                </Container>
            </Offcanvas>
        </Fragment>
    );
});

export default LandingOffcanvasHeader;