import React from 'react';

// Mui Components
import { Button, Typography } from '@mui/material';

import { Link } from "react-router-dom";

// Stylesheet
import '../Styles/ElectricityPriceApp.css';
import '@fontsource/roboto/300.css';

// Picture import
import Screenshot from '../Assets/Pictures/Screenshot_20240609_192307_Expo_Go_smaller.jpg';

const ElectricityPriceApp = () => {

  return (
    <div className='electricityPriceApp'>
      <div className="backAndHireMeButtonWrapper">
        <Link to="/">
          <Button className="backButton">
            Back
          </Button>
        </Link>
        <Link to="/HireMe">
          <Button className="hireMeButton">
            Hire me
          </Button>
        </Link>
      </div>
      <Typography variant="h1" className="electricityPriceAppTitle" align="center">
        Electricity price app
      </Typography>
      <div className="electricityPriceAppTextWrapper">
        <Typography variant="body1" className="electricityPriceAppText" align="center">
          The app is made with react native and it calls a porssisahko.net API. <br />
          The JSON data is displayed in a list of hours of the day. <br />
          The app is made for Android and it is tested with Expo Go. <br />
          The app is very simple and it&apos;s made to replace the need to download another app to check the electricity price.
        </Typography>
        <div className='electricityPriceAppImageWrapper'>
          <img
            src={Screenshot}
            alt="Image of the electricity price app"
            className="electricityPriceAppImage"
          />
        </div>
      </div>
    </div>
  );
};

export default ElectricityPriceApp;
