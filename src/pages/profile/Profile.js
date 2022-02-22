import React, { useState } from 'react'
import { Button } from 'antd'
import ModalChangePassword from '../../components/ModalChangePassword/ModalChangePassword';

export default function Profile() {

  const [showModalChangePassword, setshowModalChangePassword] = useState(false);

  const handleClose = () => setshowModalChangePassword(false);
  const handleShow = () => setshowModalChangePassword(true);


  return (
    <div className='profile'>


      <Button variant="primary" onClick={handleShow}>
       changepassword
      </Button>
      {showModalChangePassword && <ModalChangePassword visible ={showModalChangePassword} onCancel={!showModalChangePassword}   />}


    </div>
  )
}
