
import React from 'react'
import img_404 from '../assets/images/404.png';
import { Result, Button } from 'antd'
const NotFound = () => {
    return (
        <div>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary">Back Home</Button>}
            />,
        </div>
    )
}

export default NotFound