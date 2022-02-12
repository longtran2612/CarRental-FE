import React from 'react';
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="footer">
        <div className="box-container">
            <div className="box">
                <h3>Về chúng tôi</h3>
                <p>
                    data.aboutUs
                </p>
            </div>

            <div className="box">
                <h3>Link nhanh</h3>
                <a href="#home">Trang chủ</a>
                <a href="#features">Tính năng</a>
                <a href="#about">Ứng dụng</a>
                <a href="#developer">Team phát triển</a>
                <Link to='/account/registry'>Đăng ký</Link>
                <Link to='/account/login'>Đăng nhập</Link>
            </div>

        </div>

    </div>
    );
}

export default Footer;