import React, { useState } from 'react'
import { Button } from 'antd'
import ModalChangePassword from 'components/ModalChangePassword/ModalChangePassword';
import './profile.scss'


export default function Profile() {

  const [showModalChangePassword, setshowModalChangePassword] = useState(false);

  const handleClose = () => setshowModalChangePassword(false);
  const handleShow = () => setshowModalChangePassword(true);


  return (
    <div className='profile'>
      <div className='container top-profile'>
    
      </div>


      <Button variant="primary" onClick={handleShow}>
       changepassword
      </Button>
      {showModalChangePassword && <ModalChangePassword visible ={showModalChangePassword} onCancel={handleClose}   />}


    </div>
  )
}
