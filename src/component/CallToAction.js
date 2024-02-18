import React from 'react';
import "./CallToAction.css";
import { FiCode } from 'react-icons/fi';

function CallToAction() {
  return (
    <div className='cta-bg'>
        <div className='overlay'>
            <div className='container'>
                <div className='cta-text'>
                    <FiCode className='FidCode'/>
                    <h2>We're react dev team</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    <a href='#' className='cta-btn'>get to know us</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CallToAction