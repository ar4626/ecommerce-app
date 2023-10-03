import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai'
import { BiPhoneCall, BiInfoCircle } from 'react-icons/bi'

const Contact = () => {
  return (
    <>
      <Meta title='Contacts' />
      <BreadCrumb title='Contacts' />
      <div className='contact-wrapper home-wrapper-2 py-5 '>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248755.7947600086!2d80.04419733117862!3d13.047807813725866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1696296219996!5m2!1sen!2sin"
                width="600"
                height="450"
                className='border-0 w-100'
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title='Contact-us-location'
              ></iframe>
            </div>
            <div className='col-12 mt-5'>
              <div className='contact-inner-wrapper d-flex justify-content-between'>
                <div>
                  <h3 className='contact-title mb-4'>Contact Us</h3>
                  <form className='d-flex flex-column gap-15' action=''>
                    <div>
                      <input type='text' className='form-control' placeholder='Name' />
                    </div>
                    <div>
                      <input type='email' className='form-control' placeholder='Email' />
                    </div>
                    <div>
                      <input type='tel' className='form-control' placeholder='Mobile No.' />
                    </div>
                    <div>
                      <textarea
                        name=''
                        id=''
                        className=' form-control'
                        cols="30"
                        rows='4'
                        placeholder='Comments'
                      ></textarea>
                    </div>
                    <div>
                      <button className='button border-0'>Submit</button>
                    </div>
                  </form>
                </div>

                <div>
                  <h3 className='contact-title mb-4'>Get In Touch with Us..</h3>
                  <div >
                    <ul className='ps-0'>
                      <li className='mb-3 gap-15 d-flex align-items-center'>
                        <AiOutlineHome className='fs-5' />
                        <address className='mb-0'>
                          D407, Abode Valley,
                          Kakkan Street, Chennai, 603203
                        </address>
                      </li>
                      <li className='mb-3 gap-15 d-flex align-items-center'>
                        <BiPhoneCall className='fs-5' />
                        <a href='tel:+91 8210408621'>+91 8210408621</a>
                      </li>
                      <li className='mb-3 gap-15 d-flex align-items-center'>
                        <AiOutlineMail className='fs-5' />
                        <a href='mailto:ankitraj832@gmail.com'>ankitraj832@gmail.com</a>
                      </li>
                      <li className='mb-3 gap-15 d-flex align-items-center'>
                        <BiInfoCircle className='fs-5' />
                        <p className='mb-0'> Monday-Friday 10:00Am - 6:00PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact