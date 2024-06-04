import React from 'react';

// Stylesheet
import '../Styles/Footer.css';

// Mui Components
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer>
      <Typography variant="body1" className="footerText" align="center">
        © 2024 Aku Tolonen
      </Typography>
      <Typography variant="body1" className="footerText" align="center">
        <a
          className='footerLink'
          href="https://www.linkedin.com/in/aku-tolonen/"
          rel="noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>
      </Typography>
      <Typography variant="body1" className="footerText" align="center">
        <a
          className='footerLink'
          href="https://github.com/Aktonen"
          rel="noreferrer"
          target="_blank"
        >
          Github
        </a>
      </Typography>
    </footer>
  );
};

export default Footer;
