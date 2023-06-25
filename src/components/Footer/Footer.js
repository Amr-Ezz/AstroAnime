import React from "react";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import "./Footer.css";
const Footer = () => {
    
  return (
    <MDBFooter
      className="text-center text-white py-4"
      style={{ backgroundColor: "#a711342f" }}
    >
      <MDBContainer>
        <section>
          <MDBRow>
            <MDBCol lg="12" style={{padding: "0"}}>
            <div className="video-wrapper">
            <div className="ratio ratio-16x9">
               
               <video
                //  className="shadow-1-strong rounded"
                 src="/anime_-_103434 (540p).mp4"
                 title="local video"
                 loop
                 autoPlay
                 muted
                 playsInline
                 style={{width: "100%"}}
               
                 
               ></video>
             </div>
                    </div>
             
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright:
        <a className="text-white" style={{background: "none", padding: "0.5rem"}} href="https://github.com/Amr-Ezz">
        https://github.com/Amr-Ezz
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
