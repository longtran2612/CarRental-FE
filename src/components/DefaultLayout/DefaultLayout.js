import React from 'react'
import './index.css'
import Footer from '../Footer'
export default function DefaultLayout(props) {
  return (
    <div>
        <div className='header bs1'>
            <div className='d-flex justify-content-between'>
                <h1>LVOTO</h1>
                <button>user</button>

            </div>
            <div className='content'>
                {props.children}
            </div>

            <Footer/>

        </div>
    </div>
  )
}
