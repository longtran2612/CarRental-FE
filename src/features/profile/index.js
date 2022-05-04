import React, { useState } from 'react'
import { Button, Skeleton, Avatar, Image, Card, Row, Col } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import ModalChangePassword from 'components/ModalChangePassword';
import ModalChangeInfor from 'components/ModalChangeInfor';
import './style.scss'
import userDefault from "assets/images/user-default.png";
import profileCover from "assets/images/road.jpg";


export default function ProfilePage() {

  const [showModalChangePassword, setshowModalChangePassword] = useState(false);

  const handleCloseChangePassword = () => setshowModalChangePassword(false);
  const handleShowChangePassword = () => setshowModalChangePassword(true);

  const [showModalChangeInfor, setshowModalChangeInfor] = useState(false);

  const handleCloseChangeInfor = () => setshowModalChangeInfor(false);
  const handleShowChangeInfor = () => setshowModalChangeInfor(true);


  return (
    <div className='profile'>
      <div className="profile-content">
        <div className="profileRightTop">
          <div className="profileCover">
            <img
              className="profileCoverImg"
              src={profileCover}
              alt=""
            />
            <img
              className="profileUserImg"
              src={userDefault}
              alt=""
            />
          </div>
          <div className='profile-bottom'>
            <Row>
            <Col xs={0} sm={0} md={8} lg={8} xl={8}>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
              <div className="profileInfo">
                <h4 className="profileInfoName">Tran Pham Gia Long <EditOutlined onClick={handleShowChangeInfor} ></EditOutlined>
                  {showModalChangeInfor && <ModalChangeInfor visible={showModalChangeInfor} onCancel={handleCloseChangeInfor} />}
                </h4>
              </div>
              </Col>
              <Col xs={0} sm={0} md={8} lg={8} xl={8}>
              </Col>
            </Row>
            <Row style="row-profile"> 
              <Col xs={0} sm={0} md={6} lg={6} xl={6}>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <div className='card card-profile'  title="Ngày sinh">
                  <span className="profileInfoTitle">Ngày sinh</span>
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                 <div className='card card-profile'  title="Giới tính">
                  <span className="profileInfoTitle">Giới tính</span>
                </div>
                <div className='card card-profile'  title="Giới tính">
                  <span className="profileInfoText">Giới tính</span>
                </div>
              </Col>
              <Col xs={0} sm={0} md={6} lg={6} xl={6}>
              </Col>
            </Row>
            <div className="profileRightBottom">
              <Button variant="primary" onClick={handleShowChangePassword}>
                Change Password
              </Button>
              {showModalChangePassword && <ModalChangePassword visible={showModalChangePassword} onCancel={handleCloseChangePassword} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}