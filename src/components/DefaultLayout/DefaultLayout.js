import React from 'react'
import './index.css'
import Footer from '../footer/Footer'
import Header from '../header/Header'
export default function DefaultLayout(props) {
  return (
    <div>
        <Header></Header>
            <div className='content'>
               <h1> {props.children} </h1>
            </div>

            <Footer/>

        
    </div>
  )
}
