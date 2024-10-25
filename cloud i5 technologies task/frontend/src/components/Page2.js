import React from 'react';

const Page2 = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>
        Our Approach: <span style={styles.highlight}>“Collaborative, Creative, Custom”</span> ?
      </h1>
      <p style={styles.paragraph}>
        We take a collaborative approach to every project, working closely with you to understand your goals, your audience, and your unique selling points. 
        From there, our team of designers and developers leverage their expertise to craft a custom solution that not only looks beautiful but also delivers tangible results for your business. 
        Our team is comprised of talented designers and developers who are passionate about pushing the boundaries of creativity and innovation. 
        We don't just build websites – we create digital experiences that leave a lasting impression.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    lineHeight: '1.6',
  },
  heading: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#2F2F2F',
    marginBottom: '20px',
  },
  highlight: {
    color: '#2A8B56',
  },
  paragraph: {
    fontSize: '18px',
    color: '#4F4F4F',
    marginBottom: '10px',
  },
};

export default Page2;