import React, { useRef, useState } from 'react';

// Stylesheet
import '../Styles/HireMe.css';
import '@fontsource/roboto/300.css';

import emailjs from 'emailjs-com';
import { Link } from "react-router-dom";

// Mui Components
import { Button, TextField, Grid, Alert, Typography } from '@mui/material';

// Email Service credentials
import { serviceId, templateId, publicKey } from '../emailService';

function HireMe() {
  const form = useRef();
  const [alertInfo, setAlertInfo] = useState({ show: false, message: '', severity: '' })

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then(() => {
        // Set alert message
        setAlertInfo({ show: true, message: 'Message sent successfully!', severity: 'success' })
        // Hide alert message after 5 seconds
        setTimeout(() => setAlertInfo({ show: false, message: '', severity: '' }), 5000);
        // Reset form fields
        form.current.reset();
      }, () => {
        setAlertInfo({ show: true, message: 'Message failed to send!', severity: 'error' })
        setTimeout(() => setAlertInfo({ show: false, message: '', severity: '' }), 5000);
      });
  };

  return (
    <>
      {alertInfo.show ? <Alert variant='filled' severity={alertInfo.severity}>{alertInfo.message}</Alert> : null}
      <div className='hireMe'>
        <div className="homePageButtonWrapper">
          <Link to="/">
            <Button className="homePageButton">
              Home
            </Button>
          </Link>
        </div>
        <Typography
          variant="h1"
          className='hireMeTitle'
          align="center"
        >
          Hire Me!
        </Typography>
        <Typography
          className='hireMeSubTitle'
          variant="h4"
          align="center"
        >
          Fill out the form below to get in touch with me!
        </Typography>
        <Grid
          className='hireMeFormWrapper'
          container
          spacing={2}
          component="form"
          ref={form}
          onSubmit={sendEmail}
        >
          <Grid item xs={12} sm={6}>
            <TextField
              label="Name"
              className='hireMeFormTextField'
              type="text"
              name="from_name"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              className='hireMeFormTextField'
              type="email"
              name="from_email"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Company Name"
              className='hireMeFormTextField'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              className='hireMeFormTextFieldMultiline'
              name="message"
              required
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              className='hireMeFormButton'
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default HireMe;
