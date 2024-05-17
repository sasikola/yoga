import React, { useState } from "react";
import aboutImage from "../img/about2.png";
import AboutusImage from "../img/blog2.png";
import Img from "../img/aboutleaff.png";
import Img1 from "../img/logo.png";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
  FaQuestionCircle,
  FaNewspaper,
  FaEnvelopeOpenText,
} from "react-icons/fa";

const About = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Function to toggle the chat box visibility
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
  return (
    <div>
      <div className="container bg-light">
        <div style={{ position: "relative" }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzWO1xxqQQZhvTm1Fs13fSoo66NdEdpxmFfQ&usqp=CAU"
            alt="About Image"
            style={{ width: "100%", height: "500px" }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "0",
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
              width: "100%",
            }}
          >
            <h2
              style={{ color: "black", margin: "0 50px", padding: "10px 20px" }}
            >
              Yoga Alliance fosters and supports the high quality, safe,
              accessible, and equitable teaching of yoga.
            </h2>
            {/* <div>
              <button
                style={{
                  margin: "0 50px",
                  padding: "10px 20px",
                  fontSize: "16px",
                  backgroundColor: "orange",
                  color: "white",
                  border: "none",
                }}
              >
                Register
              </button>
              <button
                style={{
                  margin: "0 50px",
                  padding: "10px 20px",
                  fontSize: "16px",
                  backgroundColor: "orange",
                  color: "white",
                  border: "none",
                }}
              >
                Renew
              </button>
            </div> */}
          </div>
        </div>

        {/* Yoga */}
        <div className="container-fluid mt-5 text-center">
          <div className="row mt-4">
            <div className="col-lg-6 col-md-6 mt-3">
              <div className="row justify-content-center d-flex">
                <img
                  src="https://media.self.com/photos/5b7c4e71ecbb7f4c41c77335/2:1/w_2580,c_limit/triangle-pose-beginner-yoga.jpg"
                  alt="Why Choose Us"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 mt-3">
              <h2 style={{ marginTop: "20px", padding: "10px" }}>
                Yoga in the World Research Study
              </h2>
              <p
                style={{
                  textAlign: "justify",
                  marginTop: "30px",
                  padding: "10px",
                }}
              >
                The Yoga in the World Research Study examined various aspects of
                the practice and profession and collected quantitative and
                qualitative data from yoga practitioners, yoga teachers,
                business owners and the general public across 10 countries.
              </p>
              <button
                style={{
                  margin: "5px 50px",
                  padding: "5px 20px",
                  fontSize: "16px",
                  backgroundColor: "orange",
                  color: "white",
                  border: "none",
                }}
              >
                See the results
              </button>
            </div>
          </div>
        </div>

        {/* Member */}

        <div className="container-fluid mt-5 text-center bg bg-white">
          <div className="row mt-4">
            <div className="col-lg-6 col-md-6 mt-3">
              <h2
                style={{
                  margin: "0",
                  padding: "10px",
                  marginTop: "30px",
                  padding: "10px",
                }}
              >
                Member Assistance Program
              </h2>
              <p
                style={{
                  textAlign: "justify",
                  marginTop: "20px",
                  padding: "10px",
                }}
              >
                Gain access to personal and professional resources, guidance,
                and tools at no cost to you, your dependents, or household
                members.
              </p>
              <button
                style={{
                  margin: "5px 50px",
                  padding: "5px 20px",
                  fontSize: "16px",
                  backgroundColor: "orange",
                  color: "white",
                  border: "none",
                }}
              >
                Learn More
              </button>
            </div>
            <div className="col-lg-6 col-md-6 mt-3">
              <div className="row justify-content-center d-flex">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHISWV5OOWiwKaHOtZLSWBgszWRRFzZT7HEQ&usqp=CAU"
                  alt="Why Choose Us"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Commitement */}
        <div className="container-fluid mt-5 text-center">
          <div className="row mt-4">
            <div className="col-lg-6 col-md-6 mt-3">
              <div className="row justify-content-center d-flex">
                <img
                  src="https://cdn.shopifycdn.net/s/files/1/0027/0303/2355/files/cole-allen-Lqv3cjyTMS8-unsplash.jpg?v=1632904967"
                  alt="Why Choose Us"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 mt-3">
              <h2 style={{ marginTop: "30px", padding: "10px" }}>
                Our Commitment to Yoga for Social Impact
              </h2>
              <p
                style={{
                  textAlign: "justify",
                  marginTop: "20px",
                  padding: "10px",
                }}
              >
                Hear from Head of Social Impact, Kristina Graff, as she
                discusses the transformative power of yoga as a catalyst for
                positive change in individuals, communities, and across
                generations.
              </p>
              <button
                style={{
                  margin: "5px 50px",
                  padding: "5px 20px",
                  fontSize: "16px",
                  backgroundColor: "orange",
                  color: "white",
                  border: "none",
                }}
              >
                Play Video
              </button>
            </div>
          </div>
        </div>

        {/* Teaching */}
        <div className="container-fluid mt-5 text-center bg bg-white">
          <div className="row mt-4">
            <div className="col-lg-6 col-md-6 mt-3">
              <h2
                style={{
                  margin: "0",
                  padding: "10px",
                  marginTop: "30px",
                  padding: "10px",
                }}
              >
                Teaching for Equity Program
              </h2>
              <p
                style={{
                  textAlign: "justify",
                  marginTop: "20px",
                  padding: "10px",
                }}
              >
                The Teaching for Equity program supports yoga professionals
                across the globe who serve for little or no pay in bringing the
                healing benefits of yoga to communities who have experienced
                marginalization.{" "}
              </p>
              <button
                style={{
                  margin: "5px 50px",
                  padding: "5px 20px",
                  fontSize: "16px",
                  backgroundColor: "orange",
                  color: "white",
                  border: "none",
                }}
              >
                More about this program
              </button>
            </div>
            <div className="col-lg-6 col-md-6 mt-3">
              <div className="row justify-content-center d-flex">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG66vVDrJ_ddkfUge3bJd7xw6VeBk_dos1LQ&usqp=CAU"
                  alt="Why Choose Us"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>

        {/* YA Community */}
        <div className="container-fluid mt-5 text-center">
          <div className="row mt-4">
            <div className="col-lg-6 col-md-6 mt-3">
              <div className="row justify-content-center d-flex">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Why Choose Us"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 mt-3">
              <h2 style={{ marginTop: "30px", padding: "10px" }}>
                YA CommUnity
              </h2>
              <p
                style={{
                  textAlign: "justify",
                  marginTop: "20px",
                  padding: "10px",
                }}
              >
                Share information, resources, and experiences; and form personal
                peer-to-peer relationships that may enhance your livelihoods,
                strengthen your network, and inspire your yoga teaching and
                practice.{" "}
              </p>
              <button
                style={{
                  margin: "5px 50px",
                  padding: "5px 20px",
                  fontSize: "16px",
                  backgroundColor: "orange",
                  color: "white",
                  border: "none",
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Exploring */}
        <div className="container-fluid bg bg-white">
          <h5 className="text-uppercase text-center mt-5">
            Exploring Yoga Alliance
          </h5>
          <div className="row mt-4">
            <div className="col-lg-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  {/* <!-- Content for the first container --> */}
                  <h5 className="text-center" style={{ textAlign: "justify" }}>
                    Enhanced RYS Standards
                  </h5>
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                  <p style={{ textAlign: "justify", marginTop: "10px" }}>
                    Based on feedback from membership and the broader yoga
                    community, Yoga Alliance launched new standards for its RYS
                    200 credential as well as a strengthened application and
                    review process for all new RYS applicants. These enhanced
                    standards now include the implementation of a strengthened
                    RYS application process, which will provide for greater
                    shared accountability to meet or exceed the new standards
                  </p>
                </div>
                <div className=" text-center">
                  <button
                    style={{
                      margin: "5px 50px",
                      padding: "5px 60px",
                      fontSize: "16px",
                      backgroundColor: "orange",
                      color: "white",
                      border: "none",
                    }}
                  >
                    View the updates
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  {/* <!-- Content for the second container --> */}
                  <h5
                    className="text-center"
                    style={{ textDecoration: "none", textAlign: "justify" }}
                  >
                    #AllforYoga Campaign
                  </h5>
                  <img
                    src="https://www.medianews4u.com/wp-content/uploads/2020/06/On-International-Yoga-Day-brands-stretch-their-imagination-with-creative-campaigns.jpg"
                    alt=""
                    style={{ width: "300px", height: "200px" }}
                  />
                  <p style={{ textAlign: "justify" }}>
                    Storytelling helps bring us closer to people and the world
                    around us, fostering a deeper level of connection,
                    inspiration, and empathy across diverse communities. We’re
                    fortunate to hear stories that prove the power of yoga every
                    day, and we’re excited to share them with you in our
                    #AllforYoga campaign.
                  </p>
                  <p>
                    The new Social Impact Interview Series spotlights real-life
                    stories and voices from yoga change-makers who have
                    participated in Yoga Alliance global outreach work,
                    detailing how their teaching and practice have directly
                    benefited their personal lives, those they care for, and the
                    communities they serve.
                  </p>
                </div>
                <div className=" text-center">
                  <button
                    style={{
                      margin: "5px 50px",
                      padding: "5px 60px",
                      fontSize: "16px",
                      backgroundColor: "orange",
                      color: "white",
                      border: "none",
                    }}
                  >
                    Read their Stories
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  {/* <!-- Content for the third container --> */}
                  <h5 className="text-center" style={{ textAlign: "justify" }}>
                    Online Learning Resources
                  </h5>
                  <img
                    src="https://cdn.fordhamram.com/wp-content/uploads/Online-Yoga-Courses-Free-Paid.png"
                    alt=""
                    style={{ width: "300px", height: "200px" }}
                  />
                  <p style={{ textAlign: "justify" }}>
                    Due to sweeping changes in the yoga industry, many classes
                    and trainings are moving online. To support this transition,
                    we have compiled a variety of online teaching best
                    practices, tools, and resources for members to leverage.
                    Members also have the option to display online offerings and
                    closed-captioning capabilities to their YA profiles for
                    directory users to easily find.
                  </p>
                </div>
                <div className=" text-center">
                  <button
                    style={{
                      margin: "5px 50px",
                      padding: "5px 60px",
                      fontSize: "16px",
                      backgroundColor: "orange",
                      color: "white",
                      border: "none",
                    }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Yoga */}
        <div className="container-fluid mt-5 text-center">
          <div className="row mt-4">
            <div className="col-lg-6 col-md-6 mt-3">
              <div className="row justify-content-center d-flex">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ10CWjIsltbhIv65xM017DqvZpUnE0i5yMzg&usqp=CAU"
                  alt="Why Choose Us"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 mt-3">
              <h2 style={{ marginTop: "30px", padding: "10px" }}>
                Yoga for Social Impact
              </h2>
              <p
                style={{
                  textAlign: "justify",
                  marginTop: "20px",
                  padding: "10px",
                }}
              >
                As our 501(c)(3) nonprofit charitable organization, the Yoga
                Alliance Foundation leverages yoga for social impact and fosters
                an expansive, accessible, and equitable yoga community.
              </p>
              <button
                style={{
                  margin: "5px 50px",
                  padding: "5px 20px",
                  fontSize: "16px",
                  backgroundColor: "orange",
                  color: "white",
                  border: "none",
                }}
              >
                Discover More
              </button>
            </div>
          </div>
        </div>

        {/* Member */}
        <div className="text-center mt-3 bg bg-white">
          <h3>Member-Wide Ethical Commitment</h3>
          <p
            style={{ textAlign: "justify", marginTop: "20px", padding: "10px" }}
          >
            The Yoga Alliance{" "}
            <span className="text-danger">Ethical Commitment</span> supports our
            members and broader yoga community in welcoming all who wish to
            practice yoga. It unites membership under the YA Code of Conduct,
            Scope of Practice, and shared responsibility to equity in yoga.
          </p>
        </div>

        {/* footer */}
        <div style={{ marginTop: "50px" }} className="mb-4">
          <p className="text-center" style={{ fontSize: "12px" }}>
            Yoga Alliance is a nonprofit 501(c)(6). Yoga Alliance Foundation is
            a nonprofit 501(c)(3). This website refers to the two organizations
            as "Yoga Alliance." Copyright 2023 Yoga Alliance. Yoga Alliance, the
            Yoga Alliance logo, RYS, RYT, and YACEP are registered marks with
            the USPTO and other jurisdictions.
          </p>
        </div>

        {/* chat */}
        <div className="fixed-bottom text-end" style={{ paddingRight: "20px" }}>
          <button
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "orange",
              color: "white",
              border: "none",
              borderRadius: " 15px 15px 0 0",
            }}
            onClick={toggleChat}
          >
            Start a Chat
          </button>
        </div>

        {/* Chat Box */}
        {isChatOpen && (
          <div
            style={{
              position: "fixed",
              bottom: "80px",
              right: "20px",
              maxWidth: "300px",
              backgroundColor: "white",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              padding: "20px",
              zIndex: "999",
            }}
          >
            {/* Chat messages */}
            <div
              style={{
                marginBottom: "10px",
                overflowY: "auto",
                maxHeight: "200px",
              }}
            >
              <p>User: Hello!</p>
              <p>Agent: Hi there! How can we help you today?</p>
              {/* Add more messages as needed */}
            </div>

            {/* Input area */}
            <input
              type="text"
              placeholder="Type your message..."
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />

            {/* Send button */}
            <button
              style={{
                marginTop: "10px",
                padding: "8px 12px",
                fontSize: "14px",
                backgroundColor: "green",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Send
            </button>

            {/* Close button */}
            <button
              style={{
                marginTop: "10px",
                padding: "8px 12px",
                fontSize: "14px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={toggleChat}
            >
              Close Chat
            </button>
          </div>
        )}
      </div>
      {/* banner */}
      <div
        style={{
          backgroundColor: " rgb(109, 7, 7)",
          color: "white",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <div className="row">
          <div className="col-lg-4">
            <h5>Stay Connected</h5>
            <FaFacebook
              style={{ marginRight: "10px", fontSize: "20px", color: "white" }}
            />
            <FaTwitter
              style={{ marginRight: "10px", fontSize: "20px", color: "white" }}
            />
            <FaInstagram
              style={{ marginRight: "10px", fontSize: "20px", color: "white" }}
            />
            <FaPinterest
              style={{ marginRight: "10px", fontSize: "20px", color: "white" }}
            />
            <FaYoutube style={{ fontSize: "20px", color: "white" }} />
          </div>
          <div className="col-lg-5">
            <ul className="list-unstyled" style={{ textAlign: "justify" }}>
              <li style={{ textDecoration: "none", color: "white" }}>
                <FaQuestionCircle style={{ marginRight: "10px" }} />
                Have questions?
                <br></br> Visit our Help Center
              </li>

              <li style={{ textDecoration: "none", color: "white" }}>
                <FaEnvelopeOpenText style={{ marginRight: "10px" }} />
                Media Inquiries
              </li>
              <li style={{ textDecoration: "none", color: "white" }}>
                <FaNewspaper style={{ marginRight: "10px" }} />
                Stay up-to-date on the latest from Yoga Alliance, subscribe to
                our newsletters.
                <button
                  className="mx-4"
                  style={{
                    border: "none",
                    padding: "1px 7px",
                    borderRadius: "5px",
                    color: "rgb(109, 7, 7)",
                    fontSize: "13px",
                  }}
                >
                  Subscribe
                </button>
              </li>

              <li></li>
            </ul>
          </div>
          <div className="col-lg-3">
            <img src={Img1} alt="" style={{ width: "50%", height: "70%" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
