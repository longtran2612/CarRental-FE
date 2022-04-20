import React from 'react'
import { Button, Input, DatePicker, Col, Row, Image, Typography, Card } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchOutlined } from '@ant-design/icons';

import './style.scss';
import { EnvironmentOutlined } from '@ant-design/icons';

import tutorial1 from "assets/images/tutorial-1.svg";
import tutorial2 from "assets/images/tutorial-2.svg";
import tutorial3 from "assets/images/tutorial-3.svg";
import tutorial4 from "assets/images/tutorial-4.svg";

const { Title } = Typography;


export default function HomePage() {
  const dateFormat = 'DD/MM/YYYY'
  return (
    <div className='home'>
      <div className='home-page'>
        <div className="slogan">
          <h1 className='slogan-text' >LVOTO - THUÊ XE ĐƠN GIẢN - AN TOÀN </h1>
        </div>
        <div className='search-car'>
          <div className='tab-left'>
            <div >
              <div className='service-box'>
                <i className='itc itc-seftdrive'></i>
                <p>Xe tự lái</p>
              </div>
            </div>
            <div>
              <div className='service-box'>
                <i className='itc itc-withdriver'></i>
                <p>Xe có tài xế</p>
              </div>
            </div>
          </div>
          <div className='tab-right'>
            <FontAwesomeIcon icon="fa-solid fa-location-dot" />
            <Input prefix={<EnvironmentOutlined />} className='search-car-input' placeholder='Nhập địa điểm' />
            <DatePicker format={dateFormat} className='search-car-input' placeholder='Bắt đầu'></DatePicker>
            <DatePicker format={dateFormat} className='search-car-input' placeholder='Kết thúc'></DatePicker>
            <Button className='search-car-input' type="primary" icon={<SearchOutlined />} size="large">
              Tìm xe
            </Button>
          </div>
        </div>
      </div>
      <div className='list-selfdrive'>
        <div className='list-selfdrive-box'>
          <Row className='title-list-car' span={24}>
            <Title style={{ fontWeight: '1000', fontSize: '3rem', color: '#6c6c6e' }} >XE TỰ LÁI</Title>
          </Row>
          <Row span={24}>
            <Col xs={24} sm={24} md={12} lg={6} xl={6}>
              <Card style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />}
              >
                <Title>Toyota </Title>
                <p>
                  <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                  Phan Văn Trị, HCM
                </p>
                <p>
                  2000000 Đ/Ngày
                </p>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={12} lg={6} xl={6}>
              <Card style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />}
              >
                <Title>Toyota </Title>
                <p>
                  <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                  Phan Văn Trị, HCM
                </p>
                <p>
                  2000000 Đ/Ngày
                </p>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={12} lg={6} xl={6}>
              <Card style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />}
              >
                <Title>Toyota </Title>
                <p>
                  <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                  Phan Văn Trị, HCM
                </p>
                <p>
                  2000000 Đ/Ngày
                </p>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={12} lg={6} xl={6}>
              <Card style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />}
              >
                <Title>Toyota </Title>
                <p>
                  <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                  Phan Văn Trị, HCM
                </p>
                <p>
                  2000000 Đ/Ngày
                </p>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <div className='list-withdriver'>
      <div className='list-withdriver-box'>
        <Row className='title-list-car' span={24}>
          <Title style={{ fontWeight: '1000', fontSize: '3rem', color: '#6c6c6e' }} >XE CÓ TÀI XẾ</Title>
        </Row>
        <Row span={24}>
            <Col xs={24} sm={24} md={12} lg={6} xl={6}>
              <Card style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />}
              >
                <Title>Toyota </Title>
                <p>
                  <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                  Phan Văn Trị, HCM
                </p>
                <p>
                  2000000 Đ/Ngày
                </p>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={12} lg={6} xl={6}>
              <Card style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />}
              >
                <Title>Toyota </Title>
                <p>
                  <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                  Phan Văn Trị, HCM
                </p>
                <p>
                  2000000 Đ/Ngày
                </p>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={12} lg={6} xl={6}>
              <Card style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />}
              >
                <Title>Toyota </Title>
                <p>
                  <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                  Phan Văn Trị, HCM
                </p>
                <p>
                  2000000 Đ/Ngày
                </p>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={12} lg={6} xl={6}>
              <Card style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />}
              >
                <Title>Toyota </Title>
                <p>
                  <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                  Phan Văn Trị, HCM
                </p>
                <p>
                  2000000 Đ/Ngày
                </p>
              </Card>
            </Col>
          </Row>
          </div>

      </div>
      <div className='tutorial'>
        <Row className='title-tutorial-choose' span={24}>
          <Title style={{ fontWeight: '1000', fontSize: '3rem', color: '#6c6c6e' }} >QUY TRÌNH THUÊ XE</Title>
        </Row>
        <Row span={24} className='tutorial-item'>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} className='tutorial-box'>
            <Row className="images-tutorial-choose" span={24} >
              <Image src={tutorial1} alt='' preview={false} />
            </Row>
            <Row className="title-tutorial-choose" span={24}>
              Đặt xe
            </Row>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} className='tutorial-box'>
            <Row className="images-tutorial-choose" span={24}>
              <Image src={tutorial2} alt='' preview={false} />
            </Row>
            <Row className='title-tutorial-choose' span={24}>
              Nhận xe hoặc giao xe tận nơi
            </Row>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} className='tutorial-box'>
            <Row className="images-tutorial-choose" span={24}>
              <Image src={tutorial3} alt='' preview={false} />
            </Row>
            <Row className='title-tutorial-choose' span={24}>
              trải nghiệm chuyến đi
            </Row>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} className='tutorial-box'>
            <Row className="images-tutorial-choose" span={24}>
              <Image src={tutorial4} alt='' preview={false} />
            </Row>
            <Row className='title-tutorial-choose' span={24}>
              Kết thúc chuyến đi
            </Row>
          </Col>
        </Row>
      </div>
    </div>


  )
}
