import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChevronDown } from 'react-bootstrap-icons'; 
import './FAQComponent.css'; 
const FAQComponent = () => {
  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div className="header-content"> 
              <span>How long will it take to complete my website?</span>
              <ChevronDown className="icon-right" /> 
            </div>
          </Accordion.Header>
          <Accordion.Body>
            The timeline for completing your website depends on several factors, including the complexity of the project, the number of features and pages, and your responsiveness in providing feedback and content.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <div className="header-content">
              <span>What is the process for getting a website designed by your company?</span>
              <ChevronDown className="icon-right" />
            </div>
          </Accordion.Header>
          <Accordion.Body>
            We follow a streamlined process: initial consultation, proposal, design, development, feedback, revision, and final launch.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <div className="header-content">
              <span>Can I see examples of websites your company has designed?</span>
              <ChevronDown className="icon-right" />
            </div>
          </Accordion.Header>
          <Accordion.Body>
            Yes, we can provide examples of previous work upon request.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <div className="header-content">
              <span>Do you provide website maintenance and support services after the website is launched?</span>
              <ChevronDown className="icon-right" />
            </div>
          </Accordion.Header>
          <Accordion.Body>
            Yes, we offer ongoing maintenance and support services to ensure your website remains up-to-date and secure.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <div className="header-content">
              <span>What platform or technologies do you use for website development?</span>
              <ChevronDown className="icon-right" />
            </div>
          </Accordion.Header>
          <Accordion.Body>
            We use a range of modern technologies including HTML, CSS, JavaScript, React, and more depending on the project needs.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <div className="header-content">
              <span>What is the cost of getting a website designed by your company?</span>
              <ChevronDown className="icon-right" />
            </div>
          </Accordion.Header>
          <Accordion.Body>
            The cost varies based on the complexity and features required. Contact us for a detailed quote.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            <div className="header-content">
              <span>If my proposal is approved, how long does it take?</span>
              <ChevronDown className="icon-right" />
            </div>
          </Accordion.Header>
          <Accordion.Body>
            Once your proposal is approved, the timeline for completion will be outlined in your agreement.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FAQComponent;