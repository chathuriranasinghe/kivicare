import React, { Fragment } from 'react'
import { Col, Container, Row, Form, Pagination } from 'react-bootstrap'

// widget
import BreadCrumb from '../../components/partial/BreadCrumb'
import ShopSidebar from '../../components/widgets/ShopSidebar'
import ProductCard from '../../components/widgets/ProductCard'

// Json
import {productData} from '../../staticData/productData'

export default function ShopRightSidebar() {
  let active = 1;
  let items = [];
  for (let number = 1; number <= 3; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active} className="page-numbers">
        {number}
      </Pagination.Item>,
    );
  }
  return (
    <Fragment>
      <BreadCrumb title="Shop Right Sidebar" />
      <div className="section-padding">
        <Container>
          <Row>
            <Col xl="9">
              <div className="top-panel mb-5">
                <Row className="align-items-center">
                    <Col sm="6" className="text-center text-sm-start">
                      <p className="m-0">Showing 1–12 of 20 results</p>
                    </Col>
                    <Col sm="6" className="mt-3 mt-sm-0 d-flex align-items-center justify-content-center justify-content-sm-end gap-3">
                      <div className="product-filter">
                        <Form.Select aria-label="Default select example">
                          <option>Default Sorting</option>
                          <option value="1">Sort by popularity</option>
                          <option value="2">Sort by average rating</option>
                          <option value="3">Sort by latest</option>
                          <option value="3">Sort by price: low to high</option>
                          <option value="3">Sort by price: high to low</option>
                        </Form.Select>
                      </div>
                    </Col>
                </Row>
              </div>
              <Row className="row-cols-1 row-cols-sm-2 row-cols-md-2">
                {productData.map((item, index) => (
                  <div className="col" key={index}>
                    <ProductCard productImage={item.productImage} productTitle={item.productTitle} priceValue={item.priceValue} productCategory={item.productCategory} productDesc={item.productDesc} rating={item.ratting} IsNew={item.isNew} IsSale={item.isSale} />
                  </div>
                ))}  
              </Row>
              <div className="pagination justify-content-center">
                <Pagination className="page-numbers gap-3">
                  {items}
                </Pagination>
              </div>
            </Col>
            <Col xl="3" className="mt-xl-0 mt-5">
              <ShopSidebar />
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  )
}
