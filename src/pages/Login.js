import React from 'react'
import car from "../assets/images/car.jpg";
import {Link} from 'react-router-dom'

import { Form, Input, Button, Col, Row } from 'antd';

export default function Login() {
    return (
        <div className='login'>
            
            <Row gutter={16}>
                <Col span={14} style={{position:'relative'}} >
                    <img src={car} alt='' />
                </Col>
                <Col span={8} className='text-left'>
                    <Form
                        className='login-form p-5'
                        layout='vertical'
                        
                    >
                          <h1>Đăng nhập</h1>
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
                        <Form.Item   >
                            <Button className='btn' type="primary
                            " htmlType="submit">
                                Đăng nhập
                            </Button>
                            <hr></hr>
                            <Link to='/register'>Chưa có tài khoản? Đăng ký</Link>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

