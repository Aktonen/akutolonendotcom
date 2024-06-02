import { Link } from "react-router-dom";

// Stylesheet
import "../Styles//HomePage.css";

function HomePage() {
  return (
    <div className="homePage">
      <div className="hireMeButtonWrapper">
        <Link to="/HireMe">
          <button className="hireMeButton">
            Hire me
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
