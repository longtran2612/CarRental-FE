import React from 'react';
import PropTypes from "prop-types";
import './style.scss';
import { Col, Divider, Row, Space } from "antd";
import { FacebookFilled, InstagramFilled, TwitterSquareFilled, GithubOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';

import logo from 'assets/images/logo.png';

Footer.propTypes = {};


function Footer(props) {
    return (
        <div className="footer">
            <Divider style={{ marginTop: '0px' }} />
            <Row gutter={[0, 16]}>
                <Col xl={{ span: 10 }} xs={{ span: 24 }} sm={{ span: 24 }}>
                    <div className='footer_left'>


                        <Link to="/" >
                            <div className="footer_left-logo-page">
                                <img src={logo} alt="LV-OTO" />
                            </div>
                        </Link>




                        <div className="footer_left-intro">
                           Website kết nối giữa người thuê xe và người cho thuê xe một cách nhanh chóng, an toàn
                        </div>

                        <div className="footer_left-contact">

                            <a href="#" className='footer_left-contact--logo-branch'>
                                <FacebookFilled />
                            </a>
                            <a href="#" className='footer_left-contact--logo-branch'>
                                <TwitterSquareFilled />
                            </a>
                            <a href="#" className='footer_left-contact--logo-branch'>
                                <InstagramFilled />
                            </a>
                        </div>


                    </div>
                </Col>

                <Col xl={{ span: 14 }} xs={{ span: 24 }} sm={{ span: 24 }} >
                    <div className='footer_right'>
                        <Row gutter={[8, 8]}>
                            <Col xl={{ span: 8 }} xs={{ span: 24 }} sm={{ span: 8 }} >
                                <ul className="footer_right-title">
                                    <span>Hỗ trợ</span>

                                    <li className="footer_right-list">                                   
                                        <Link to="/usermanual" >Hướng dẫn sử dụng</Link>
                                    </li>
                                    <li className="footer_right-list">
                                        <Link to="/">Cộng đồng</Link>
                                    </li>
                                    <li className="footer_right-list">
                                        <Link to="/">Báo cáo lạm dụng</Link>
                                    </li>
                                </ul>

                            </Col>
                            <Col xl={{ span: 8 }} xs={{ span: 24 }} sm={{ span: 8 }}>
                                <ul className="footer_right-title">
                                    <span>Khám phá</span>

                                    <li className="footer_right-list">
                                        <Link to="/">Trang chủ</Link>
                                    </li>
                                    <li className="footer_right-list">
                                        <Link to="/exams">Thuê xe</Link>
                                    </li>
                                    <li className="footer_right-list">
                                        <Link to="/translate">Cho thuê xe</Link>
                                    </li>
                                </ul>

                            </Col>
                            <Col xl={{ span: 8 }} xs={{ span: 24 }} sm={{ span: 8 }} >
                                <ul className="footer_right-title">
                                    <span>Creators</span>
                                    <li className="footer_right-list">
                                        <a href="https://github.com/s2taaa" target="_blank"><GithubOutlined /> Tran Pham Gia Long</a>
                                    </li>
                                    <li className="footer_right-list">
                                        <a href="https://github.com/VanVuong-Github" target="_blank"><GithubOutlined /> Lai Van Vuong </a>
                                    </li>
                                </ul>

                            </Col>
                        </Row>



                        <Row gutter={[8, 8]}>
                            <Col span={24} >
                                <div className='footer_right-copyright'>
                                    © Copyright by VLOTO, 2022
                                </div>
                            </Col>

                        </Row>
                    </div>
                </Col>



            </Row>
        </div >
    );
}

export default Footer;