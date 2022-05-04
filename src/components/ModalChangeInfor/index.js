import React, {useState} from 'react'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import {
    Form,DatePicker,
    Input, Modal
} from 'antd';
import PropTypes from 'prop-types';
import './style.scss'
ModalChangeInfor.propTypes = {
    visible: PropTypes.bool.isRequired,
    onCancel: PropTypes.func,
};

ModalChangeInfor.defaultProps = {
    onCancel: null,
    onSaveCodeRevoke: null
};

export default function ModalChangeInfor({ onCancel, visible }) {
    const [form] = Form.useForm();
    const { confirm } = Modal;
    const dateFormat = 'DD/MM/YYYY'

    const handleOk = async()=>{

    }
    const handleCancel = () => {
        if (onCancel) {
            onCancel();
        }
    }

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };
  
    return (
        <Modal
        title="Cập nhật thông tin cá nhân"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText='Thay đổi'
        cancelText='Hủy'

    >
        <Form
            {...formItemLayout}
            form={form}
            name="changeinfor"
            initialValues={{
                name: '',
                birthDay: '',
                gender: '',
                confirm: ''
            }}
            scrollToFirstError
        >
            <Form.Item
                name="name"
                label="Tên"
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng nhập Tên!',
                    },
                ]}
                hasFeedback
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="birthDay"
                label="Ngày sinh"
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng nhập ngày sinh!',
                    },
                ]}
                hasFeedback
            >
                <DatePicker format={dateFormat} className="change-infor-input" ></DatePicker>
            </Form.Item>
            <Form.Item
                name="gender"
                label="Giới tính"
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng nhập giới tính!',
                    },
                ]}
                hasFeedback
            >
                <Input />
            </Form.Item>
        </Form>
    </Modal>
  )
}
