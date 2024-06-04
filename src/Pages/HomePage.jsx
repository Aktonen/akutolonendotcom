import { Link } from "react-router-dom";

// Mui Components
import { Button } from "@mui/material";

// Stylesheet
import "../Styles//HomePage.css";

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
    </div>
  );
}

export default HomePage;
