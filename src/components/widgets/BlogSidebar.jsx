import React, { Fragment } from 'react'
import { Form, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// json
import {blogs} from '../../staticData/blogData'

export default function BlogSidebar() {
  return (
    <Fragment>
      <div className="widget-area">
          <div className="widget bg-primary-subtle widget_search p-5 mb-5">
            <div className="form-group input-group mb-0 search-input">
                <Form.Control type="text" placeholder="Search..." />
                <Button type="submit" className="block-search_button">
                  <svg className="icon-20" width="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round"></circle>
                      <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </Button>
            </div>
          </div>
          <div className="widget bg-primary-subtle iq-widget-menu p-5 mb-5">
              <h5 className="widget-title position-relative mb-5 pb-3 letter-spacing-1 fw-normal">Recent Post</h5>
              <ul className="p-0 m-0">
                {blogs.slice(0, 3).map((item, index) => (
                  <li className="d-flex gap-4" key={index}>
                    <div className="img-holder">
                      <Link to="/blog/blog-details">
                        <Image src={item.blogImage} alt="" className="img-fluid" />
                      </Link>
                    </div>
                    <div className="post-blog">
                        <ul className="list-inline mb-2">
                            <li className="list-inline-item border-0 mb-0 pb-0">
                              <Link to="/blog/blog-date"> <i className="far fa-calendar-alt me-2" aria-hidden="true"></i>{item.blogPublishDate}</Link>
                            </li>
                            <li className="list-inline-item border-0 mb-0 pb-0">
                              <Link to="/blog/blog-author"> <i className="far fa-user me-1" aria-hidden="true"></i>{item.blogAuthod} </Link>
                            </li>
                        </ul>
                        <Link className="new-link" to="/blog/blog-details">
                            <h6 className="post-title mb-0 text-capitalize">{item.blogTitle}</h6>
                        </Link>
                      </div>
                  </li>
                ))}
                
              </ul>
          </div>
          <div className="widget bg-primary-subtle widget_categories p-5 mb-5">
            <h5 className="widget-title position-relative mb-5 pb-3 letter-spacing-1 fw-normal">Categories</h5>
            <ul className="p-0 m-0 list-unstyled">
              <li className="cat-item">
                  <Link to="/blog/blog-category" className="position-relative">Disease</Link>
                  <span className="archiveCount">2</span>
              </li>
              <li className="cat-item">
                  <Link to="/blog/blog-category" className="position-relative">Eye Care</Link>
                  <span className="archiveCount">5</span>
              </li>
              <li className="cat-item">
                  <Link to="/blog/blog-category" className="position-relative">Health Care</Link>
                  <span className="archiveCount">4</span>
              </li>
              <li className="cat-item">
                  <Link to="/blog/blog-category" className="position-relative">Uncategorized</Link>
                  <span className="archiveCount">1</span>
              </li>
            </ul>
          </div>
          <div className="widget bg-primary-subtle widget_tags p-5 mb-5">
              <h5 className="widget-title position-relative mb-5 pb-3 letter-spacing-1 fw-normal">Tags</h5>
              <ul className="p-0 m-0 list-unstyled">
                <li className="cat-item mb-0 pb-0 border-0 d-inline">
                    <Link to="/blog/blog-tag" className="position-relative">Eyecare</Link>
                </li>
                <li className="cat-item mb-0 pb-0 border-0 d-inline">
                    <Link to="/blog/blog-tag" className="position-relative">Healthcare</Link>
                </li>
                <li className="cat-item mb-0 pb-0 border-0 d-inline">
                    <Link to="/blog/blog-tag" className="position-relative">Health News</Link>
                </li>
                <li className="cat-item mb-0 pb-0 border-0 d-inline">
                    <Link href="/blog/blog-tag" className="position-relative">Insurance</Link>
                </li>
                <li className="cat-item mb-0 pb-0 border-0 d-inline">
                    <Link href="/blog/blog-tag" className="position-relative">Vaccine</Link>
                </li>
              </ul>
          </div>
          <div className="widget bg-primary-subtle widget_contact p-5 mb-5">
            <h5 className="widget-title position-relative mb-5 pb-3 letter-spacing-1 fw-normal">Reach Us</h5>
            <ul className="p-0 m-0 list-unstyled">
              <li className="d-flex">
                  <Link to="tel:+0123456789" className="d-flex gap-3">
                    <span className="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon-20" viewBox="0 0 27 27" fill="none">
                          <mask style={{maskType:`alpha`}} maskUnits="userSpaceOnUse" x="0" y="0" width="27" height="27">
                              <path fillRule="evenodd" clipRule="evenodd"
                                d="M0.5 0.500244H26.1245V26.1246H0.5V0.500244Z" fill="white"></path>
                          </mask>
                          <g>
                              <path fillRule="evenodd" clipRule="evenodd"
                                d="M3.44886 4.32583C3.45136 4.32583 3.38886 4.39083 3.31011 4.46833C3.00761 4.76208 2.38136 5.37333 2.37511 6.65208C2.36511 8.44083 3.54136 11.7621 9.2051 17.4246C14.8426 23.0596 18.1589 24.2496 19.9514 24.2496H19.9776C21.2564 24.2433 21.8664 23.6158 22.1614 23.3146C22.2514 23.2221 22.3239 23.1546 22.3751 23.1121C23.6201 21.8596 24.2576 20.9271 24.2514 20.3296C24.2426 19.7196 23.4839 18.9983 22.4351 18.0008C22.1014 17.6833 21.7389 17.3383 21.3564 16.9558C20.3651 15.9671 19.8739 16.1358 18.7939 16.5158C17.3001 17.0396 15.2501 17.7521 12.0651 14.5658C8.8751 11.3783 9.58885 9.33083 10.1114 7.83708C10.4889 6.75708 10.6614 6.26458 9.66886 5.27208C9.28011 4.88458 8.93136 4.51708 8.61011 4.17958C7.61886 3.13708 6.90386 2.38333 6.29761 2.37458H6.28761C5.68886 2.37458 4.75886 3.01458 3.44261 4.33083C3.44636 4.32708 3.44761 4.32583 3.44886 4.32583ZM19.9526 26.1246C16.8376 26.1246 12.7764 23.6446 7.8801 18.7508C2.96511 13.8371 0.481355 9.76333 0.500105 6.64208C0.511355 4.57958 1.59261 3.52333 1.99886 3.12708C2.02011 3.10083 2.09261 3.02958 2.11761 3.00458C3.9101 1.21083 5.11885 0.485831 6.32135 0.499581C7.7176 0.518331 8.71135 1.56333 9.96885 2.88708C10.2801 3.21458 10.6176 3.57083 10.9939 3.94583C12.8189 5.77083 12.2989 7.25958 11.8814 8.45458C11.4264 9.75833 11.0326 10.8833 13.3901 13.2408C15.7501 15.5983 16.8751 15.2046 18.1739 14.7458C19.3701 14.3283 20.8551 13.8058 22.6826 15.6308C23.0526 16.0008 23.4039 16.3346 23.7276 16.6433C25.0576 17.9071 26.1076 18.9058 26.1251 20.3058C26.1401 21.4996 25.4151 22.7158 23.6251 24.5071L22.8326 23.9696L23.5026 24.6246C23.1064 25.0308 22.0514 26.1133 19.9876 26.1246H19.9526Z"
                                fill="#7093E5"></path>
                          </g>
                        </svg>
                    </span>
                    <span>+ (94) 773-674-288</span>
                  </Link>
              </li>
              <li className="d-flex">
                  <Link to="mailto:support@example.com" className="d-flex gap-3">
                    <span className="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon-20" width="28" height="25" viewBox="0 0 28 25" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd"
                              d="M13.7217 14.831C12.8854 14.831 12.0516 14.5547 11.3541 14.0022L5.7479 9.48224C5.34415 9.15724 5.28165 8.56599 5.6054 8.16349C5.93165 7.76224 6.52165 7.69849 6.92415 8.02224L12.5254 12.5372C13.2292 13.0947 14.2204 13.0947 14.9291 12.5322L20.4741 8.02474C20.8766 7.69599 21.4667 7.75849 21.7941 8.16099C22.1204 8.56224 22.0592 9.15224 21.6579 9.47974L16.1029 13.9947C15.4004 14.5522 14.5604 14.831 13.7217 14.831Z"
                              fill="#7093E5"></path>
                          <mask style={{maskType:`alpha`}} maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="25">
                              <path fillRule="evenodd" clipRule="evenodd" d="M0.25 0.5H27.1249V24.875H0.25V0.5Z"
                                fill="white"></path>
                          </mask>
                          <g>
                              <path fillRule="evenodd" clipRule="evenodd"
                                d="M7.54875 23H19.8237C19.8263 22.9975 19.8363 23 19.8438 23C21.27 23 22.535 22.49 23.505 21.5212C24.6313 20.4 25.25 18.7887 25.25 16.985V8.4C25.25 4.90875 22.9675 2.375 19.8237 2.375H7.55125C4.4075 2.375 2.125 4.90875 2.125 8.4V16.985C2.125 18.7887 2.745 20.4 3.87 21.5212C4.84 22.49 6.10625 23 7.53125 23H7.54875ZM7.5275 24.875C5.59875 24.875 3.87625 24.175 2.54625 22.85C1.065 21.3725 0.25 19.29 0.25 16.985V8.4C0.25 3.89625 3.38875 0.5 7.55125 0.5H19.8238C23.9863 0.5 27.125 3.89625 27.125 8.4V16.985C27.125 19.29 26.31 21.3725 24.8288 22.85C23.5 24.1737 21.7763 24.875 19.8438 24.875H19.8238H7.55125H7.5275Z"
                                fill="#7093E5"></path>
                          </g>
                        </svg>
                    </span>
                    <span>info@wedameduraayurveda.com</span>
                  </Link>
              </li>
              <li className="d-flex">
                  <Link className="d-flex gap-3">
                    <span className="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon-20" width="30" height="28" viewBox="0 0 21 25" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd"
                              d="M10.3125 8.625C9.10625 8.625 8.125 9.60625 8.125 10.8138C8.125 12.02 9.10625 13 10.3125 13C11.5188 13 12.5 12.02 12.5 10.8138C12.5 9.60625 11.5188 8.625 10.3125 8.625ZM10.3125 14.875C8.0725 14.875 6.25 13.0538 6.25 10.8137C6.25 8.5725 8.0725 6.75 10.3125 6.75C12.5525 6.75 14.375 8.5725 14.375 10.8137C14.375 13.0538 12.5525 14.875 10.3125 14.875Z"
                              fill="#7093E5"></path>
                          <mask style={{maskType:`alpha`}} maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="25">
                              <path fillRule="evenodd" clipRule="evenodd" d="M0 0.5H20.6244V24.875H0V0.5Z"
                                fill="white">
                              </path>
                          </mask>
                          <g>
                              <path fillRule="evenodd" clipRule="evenodd"
                                d="M10.3125 2.375C5.66 2.375 1.875 6.19625 1.875 10.8912C1.875 16.865 8.905 22.685 10.3125 22.995C11.72 22.6837 18.75 16.8637 18.75 10.8912C18.75 6.19625 14.965 2.375 10.3125 2.375ZM10.3125 24.875C8.07 24.875 0 17.935 0 10.8912C0 5.16125 4.62625 0.5 10.3125 0.5C15.9987 0.5 20.625 5.16125 20.625 10.8912C20.625 17.935 12.555 24.875 10.3125 24.875Z"
                                fill="#7093E5"></path>
                          </g>
                        </svg>
                    </span>
                    <span>170/A, Tiverton, Colombo Road, Peradeniya</span>
                  </Link>
              </li>
            </ul>
          </div>
      </div>
    </Fragment>
  )
}