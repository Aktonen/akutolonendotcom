import { Link } from "react-router-dom";

// Mui Components
import { Button, Typography } from "@mui/material";

// Stylesheet
import "../Styles//HomePage.css";
import '@fontsource/roboto/300.css';

function HomePage() {
  return (
    <div className="homePage">
      <div className="hireMeButtonWrapper">
        <Link to="/HireMe">
          <Button className="hireMeButton">
            Hire me
          </Button>
        </Link>
      </div>
      <Typography variant="h1" className="homePageTitle" align="center">
        Welcome to my portfolio!
      </Typography>
      <Typography variant="h6" className="homePageSubTitle" align="center">
        About me
      </Typography>
      <Typography variant="body1" className="homePageText" align="center">
        My name is Aku Tolonen. I&apos;m an almost gratuated Bachelor of business information systems from Oulu, Finland. I have a passion for coding and I&apos;m always looking for new challenges to solve. I have experience in web development and mobile development. I&apos;m always looking for new projects to work on, so if you have a project in mind, don&apos;t hesitate to contact me!
      </Typography>
      <Typography variant="h6" className="homePageSubTitle" align="center">
        My projects
      </Typography>
    </div>
  );
}

export default HomePage;
