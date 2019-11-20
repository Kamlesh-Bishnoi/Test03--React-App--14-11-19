import React from "react";
import "./About.css";
function About() {
  return (
    <div>
      <div className="container about">
        <div className="row">
          <div className="col-md-12 aboutus">
            <h3 className="textcontact">About Us</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 aboutus-p">
            <p className="contact-p">
              Lorem Ipsum is simply dummy text of the printing and type setting
              industry lorem ipsum Lorem Ipsum is simply dummy text of the
              printing
            </p>
            <p className="contact-p">
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              ipsum dolor sit amet.{" "}
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 tab">
            <div className="row">
              <div className="col-md-8 offset-md-2 div1">
                <div className="row">
                  <div className="col-md-1 smallCircle">
                    <div className="row">
                      <div className="col-md-12 ">
                        <div className="circle1"></div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="circle2"></div>
                      </div>
                    </div>{" "}
                  </div>

                  <div className="col-md-10 flexImage">
                    <img
                      className="tabletImage"
                      src="https://wallpaperplay.com/walls/full/d/5/9/312323.jpg"
                      alt="tablet"
                    ></img>
                  </div>
                  <div className="col-md-1 circleButton">
                    <div className="Bigcircle">
                      <div className="circle-with-rect"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 aboutFooter">
            <p className="contact-p1">
              Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum
              type setting industry lorem ipsum Lorem Ipsum is simply dummy text
              of the printing{" "}
            </p>
            <p className="contact-p1">
              {" "}
              Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum
              type setting industry lorem ipsum Lorem Ipsum is simply dummy text
              of the printing
            </p>
            <p className="contact-p1">
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              ipsum dolor sit amet.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
