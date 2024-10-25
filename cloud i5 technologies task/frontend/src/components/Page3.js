import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { ArrowRight, Eye, HandIndex, Megaphone, Gear, Person, Shop, CashStack } from 'react-bootstrap-icons';

const Page3 = () => {
  return (
    <Container style={styles.container}>
      <h2 style={styles.heading}>Our Services</h2>
      <h3 style={styles.subheading}>
        “User-Centric Design, Responsive Solutions, Tailored Solutions”
      </h3>

      <Row style={styles.row}>
        <Col md={3}>
          <Card style={styles.card}>
            <Card.Body>
              <ArrowRight style={styles.icon} />
              <Card.Title>Access to Existing Customers</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={styles.card}>
            <Card.Body>
              <Eye style={styles.icon} />
              <Card.Title>Brand and Visibility</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={styles.card}>
            <Card.Body>
              <HandIndex style={styles.icon} />
              <Card.Title>Easy to use Admin Panel</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={styles.card}>
            <Card.Body>
              <Megaphone style={styles.icon} />
              <Card.Title>Gain from our digital marketing initiative</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row style={styles.row}>
        <Col md={3}>
          <Card style={styles.card}>
            <Card.Body>
              <Gear style={styles.icon} />
              <Card.Title>Dedicated Success Executive</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={styles.card}>
            <Card.Body>
              <Person style={styles.icon} />
              <Card.Title>Training and guidance</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={styles.card}>
            <Card.Body>
              <Shop style={styles.icon} />
              <Card.Title>Feature at your service</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={styles.card}>
            <Card.Body>
              <CashStack style={styles.icon} />
              <Card.Title>Working capital support</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const styles = {
  container: {
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    textAlign: 'center',
  },
  heading: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#2F2F2F',
    marginBottom: '20px',
  },
  subheading: {
    fontSize: '22px',
    color: '#2A8B56', 
    marginBottom: '40px',
  },
  row: {
    marginBottom: '20px',
  },
  card: {
    borderRadius: '12px',
    backgroundColor: '#E9F0EF',
    textAlign: 'center',
    padding: '20px',
  },
  icon: {
    fontSize: '30px',
    color: '#2A8B56', 
    marginBottom: '10px',
  },
};

export default Page3;