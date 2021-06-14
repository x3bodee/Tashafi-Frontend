import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '../../css/Footer.css'



export default function Footer() {


  return (
    <>

      <MDBFooter color="blue" className="font-small pt-4 mt-4">

        <div className="footer-copyright text-center py-3 ">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()}  Copyright: TASHAFI.com
          </MDBContainer>
        </div>
      </MDBFooter>


      {/* <div class="footer" >
         <p class="text"> &copy; {new Date().getFullYear()} Copyright: TASHAFI.com </p>
        </div> */}


    </>
  )
}
