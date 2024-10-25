import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Page5 = () => {
  const steps = [
    { id: 1, text: 'Register your interest' },
    { id: 2, text: 'Team connects with you' },
    { id: 3, text: 'Submit your proposal' },
    { id: 4, text: 'Connect our Agency' },
    { id: 5, text: 'Start business operation' },
  ];

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '100px',
    textAlign: 'center',
  };

  const headerStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const subHeaderStyle = {
    color: '#8A8A8A',
    marginBottom: '20px',
  };

  const stepContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginTop: '30px',
  };

  const cardStyle = {
    backgroundColor: '#2B6148',
    color: '#FFF',
    borderRadius: '10px',
    width: '60px',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
  };

  const labelStyle = {
    marginTop: '10px',
    color: '#8A8A8A',
  };

  const dashedLineStyle = {
    flexGrow: 1,
    borderTop: '2px dashed #8A8A8A',
    margin: '0 10px',
  };

  return (
    <div style={containerStyle}>
      <Typography style={headerStyle}>Register your interest and wait for callback</Typography>
      <Typography style={subHeaderStyle}>
        You can own a branded licensed website in 5 simple steps
      </Typography>

      <div style={stepContainerStyle}>
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div style={{ textAlign: 'center' }}>
              <Card style={cardStyle}>
                <CardContent>{step.id}</CardContent>
              </Card>
              <Typography style={labelStyle}>{step.text}</Typography>
            </div>
            {index < steps.length - 1 && <div style={dashedLineStyle}></div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Page5;