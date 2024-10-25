import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { CheckCircle } from 'react-bootstrap-icons'; 
import pic from './indian-businesswoman-standing-working-her-laptop_665346-20105.avif'

const Page4 = () => {
  return (
    <Container style={styles.container}>
      <Card style={styles.card}>
        <Row>
          <Col md={7}>
            <h2 style={styles.heading}>
              Why Choose <span style={styles.highlight}>Cloudi5</span> for Your Web Design Needs:
            </h2>
            <ul style={styles.list}>
              <li>
                <CheckCircle style={styles.icon} /> With years of experience in the industry, our team brings a wealth of expertise to every project.
              </li>
              <li>
                <CheckCircle style={styles.icon} /> We have successfully designed and developed websites for a diverse range of clients across various industries.
              </li>
              <li>
                <CheckCircle style={styles.icon} /> From seamless navigation to compelling calls-to-action, we ensure that every aspect of your website is designed with the user in mind.
              </li>
              <li>
                <CheckCircle style={styles.icon} /> We understand that every business is unique.
              </li>
            </ul>
          </Col>
          <Col md={5}>
            <img
              src={pic} 
              alt="Professional Woman"
              style={styles.image}
            />
          </Col>
        </Row>
      </Card>

      <Card style={styles.footerCard}>
        <h3 style={styles.footerHeading}>Ready to elevate your online presence?</h3>
        <p style={styles.footerText}>Let's turn your vision into reality!</p>
        <p style={styles.footerSubtext}>
          Contact us today to schedule a consultation and discover our exceptional web design services.
        </p>
        <Button style={styles.button}>Register Now</Button>
      </Card>
    </Container>
  );
};

const styles = {
  container: {
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    backgroundColor: '#FCEFF1',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '20px',
  },
  heading: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  },
  highlight: {
    color: '#2A8B56',
  },
  list: {
    listStyleType: 'none',
    paddingLeft: '0',
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#4F4F4F',
  },
  icon: {
    marginRight: '10px',
    color: '#2A8B56',
    fontSize: '20px',
  },
  image: {
    width: '100%',
    borderRadius: '10px',
  },
  footerCard: {
    backgroundColor: '#1E3B32',
    color: '#fff',
    borderRadius: '12px',
    textAlign: 'center',
    padding: '40px',
  },
  footerHeading: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: '20px',
    margin: '10px 0',
  },
  footerSubtext: {
    fontSize: '16px',
    marginBottom: '30px',
  },
  button: {
    backgroundColor: '#F4F4F4',
    color: '#1E3B32',
    fontSize: '16px',
    padding: '10px 20px',
    borderRadius: '25px',
    border: 'none',
  },
};

export default Page4;