import React, { useRef, useState } from 'react';

// Stylesheet
import '../Styles/HireMe.css';

import emailjs from 'emailjs-com';

// Mui Components
import { Button, TextField, Grid, Alert } from '@mui/material';

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
        <Grid
          className='hireMeFormWrapper'
          container
          spacing={2}
          component="form"
          ref={form}
          onSubmit={sendEmail}
        >
          <Grid item xs={6}>
            <TextField
              label="Name"
              className='hireMeFormTextField'
              type="text"
              name="from_name"
              required
            />
          </Grid>
          <Grid item xs={6}>
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
              required
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
