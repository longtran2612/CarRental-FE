import React from 'react'
import { Menu } from 'antd';
import { MailOutlined, MessageOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
        <Menu mode="horizontal">
                <Menu.Item key="home" icon={<MailOutlined />}>
                    <Link to="/"> Trang chủ</Link>
                </Menu.Item>
                <Menu.Item key="login" icon={<MessageOutlined />}>
                    <Link to="/login"> Chat</Link>
                </Menu.Item>
            </Menu>
        

    </div>
  )
}
