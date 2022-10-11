import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBBox, CDBContainer } from 'cdbreact';
import logo from '../../favicon.png'

const Footer = () => {
    return (
        <CDBFooter className="shadow-lg">
        <CDBBox
          display="flex"
          justifyContent="between"
          alignItems="center"
          className="mx-auto py-4 flex-wrap"
          style={{ width: '80%' }}
        >
            
          <CDBBox display="flex" alignItems="center">
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img
                alt="logo"
                src={logo}
                width="30px"
              />
              <span className="ml-4 h5 mb-0 fw-bold fs-4">LearnAid</span>
            </a>
          </CDBBox>
          <CDBBox>
            <small className="ml-2 fs-6">&copy; LearnAid, 2022. All rights reserved.</small>
          </CDBBox>
          <CDBBox display="flex">
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="facebook-f" />
            </CDBBtn>
            <CDBBtn flat color="dark" className="mx-3 p-2">
              <CDBIcon fab icon="twitter" />
            </CDBBtn>
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="instagram" />
            </CDBBtn>
          </CDBBox>
        </CDBBox>
      </CDBFooter>
    );
  };

export default Footer;