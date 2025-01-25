import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import { motion } from "framer-motion";
import '../styles/Registration.css'; // Make sure you create this file

function Register() {
  return (
    <MDBContainer fluid className="gradient-background d-flex align-items-center justify-content-center vh-100">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <MDBCard className='text-black shadow-lg' style={{ borderRadius: '20px', maxWidth: '900px' }}>
          <MDBCardBody className="p-5">
            <MDBRow className="g-0">
              {/* Left Side - Form */}
              <MDBCol md='6' className='order-2 order-md-1 d-flex flex-column align-items-center'>

                <h3 className="text-center fw-bold mb-4">Create an Account</h3>

                <div className="d-flex flex-row align-items-center mb-3 w-100">
                  <MDBIcon fas icon="user me-3 text-primary" size='lg' />
                  <MDBInput label='Your Name' id='form1' type='text' className='w-100' />
                </div>

                <div className="d-flex flex-row align-items-center mb-3 w-100">
                  <MDBIcon fas icon="envelope me-3 text-primary" size='lg' />
                  <MDBInput label='Your Email' id='form2' type='email' className='w-100' />
                </div>

                <div className="d-flex flex-row align-items-center mb-3 w-100">
                  <MDBIcon fas icon="lock me-3 text-primary" size='lg' />
                  <MDBInput label='Password' id='form3' type='password' className='w-100' />
                </div>

                <div className="d-flex flex-row align-items-center mb-3 w-100">
                  <MDBIcon fas icon="key me-3 text-primary" size='lg' />
                  <MDBInput label='Repeat Password' id='form4' type='password' className='w-100' />
                </div>

                <div className='mb-3 w-100'>
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I agree to the terms & conditions' />
                </div>

                <MDBBtn className='w-100 gradient-btn' size='lg'>Register</MDBBtn>

                <p className="mt-3">Already have an account? <a href="/login" className="text-primary">Sign in</a></p>

              </MDBCol>

              {/* Right Side - Image */}
              <MDBCol md='6' className='order-1 order-md-2 d-flex align-items-center justify-content-center'>
                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid className="rounded" style={{ maxHeight: "450px" }} />
              </MDBCol>

            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </motion.div>

    </MDBContainer>
  );
}

export default Register;
