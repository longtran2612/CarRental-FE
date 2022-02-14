import React from 'react'

import car from "../assets/images/car.jpg";
import {Link} from 'react-router-dom'

import { Form, Input, Button, Col, Row } from 'antd';


export default function Register() {
  return (
    <div className='register'>
        
        <Row gutter={16}>
            <Col span={14} style={{position:'relative'}} >
                <img src={car} alt='' />
            </Col>
            <Col span={8} className='text-left'>
                <Form
                    className='register-form p-5'
                    layout='vertical'
                    
                >
                      <h1>Đăng ký</h1>
                    <Form.Item
                       label='Email'  
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Email không được để trống!',
                            },
                        ]}
                    >
                        <Input placeholder='Nhập vào Email' />
                    </Form.Item>

                    <Form.Item  
                     label='Mật khẩu'                  
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Mật khẩu không được để trống!',
                            },
                        ]}
                    >
                        <Input.Password placeholder='Nhập vào mật khẩu' />
                    </Form.Item>
                    <Form.Item
                     label= ' Xác nhận mật khẩu'
                        name="confirmPassword"
                        rules={[
                            {
                                required: true,
                                message: 'Mật khẩu không được để trống!',
                            },
                        ]}
                    >
                        <Input.Password placeholder='Xác nhận mật khẩu'  />
                    </Form.Item>
                    <Form.Item >
                        <Button className='btn-login' type="primary
                        " htmlType="submit">
                            Đăng ký
                        </Button>
                        <hr></hr>
                        <Link to='/login'>Đã có tài khoản? Đăng nhập</Link>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    </div>
);
};

