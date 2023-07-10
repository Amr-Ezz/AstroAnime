"use client"
import React from "react";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
const Footer = () => {
  return (
    <MDBFooter
      className="text-center text-white py-1"
      style={{ backgroundColor: "rgba(42, 0, 0, 0.69)" }}
    >
      <MDBContainer>
        <section>
          <MDBRow>
            <MDBCol lg="12" style={{ padding: "0" }}>
              <div className="video-wrapper">
                <ul className="footer-wrapper">
                  <li className="footer_links--1">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer_icon--1"
                    >
                      <FontAwesomeIcon icon={faFacebook} /> Facebook
                    </a>
                  </li>
                  <li className="footer_links--2">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer_icon--2"
                    >
                      <FontAwesomeIcon icon={faTwitter} /> Twitter
                    </a>
                  </li>
                  <li className="footer_links--3">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer_icon--3"
                    >
                      <FontAwesomeIcon icon={faInstagram} /> Instagram
                    </a>
                  </li>
                  <li className="footer_links--4">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer_icon--4"
                    >
                      <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                    </a>
                  </li>
                </ul>

                <div className="ratio ratio-16x9">
                  <video
                    className="shadow-1-strong rounded"
                    src="/anime_-_103434 (540p).mp4"
                    title="local video"
                    loop
                    autoPlay
                    muted
                    playsInline
                    style={{ width: "100%" }}
                  ></video>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>
      <div className="footer_container">
        {/* <img src="anime_footer.jpg" alt="anime image" className="anime_footer_img" /> */}
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright:
        <a
          className="text-white"
          style={{ background: "none", padding: "0.5rem" }}
          href="https://github.com/Amr-Ezz"
        >
          https://github.com/Amr-Ezz
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
/*  */
