import "../pages/Project.css";
import "../pages/Commonpage.css";
import Card from "react-bootstrap/Card";
import Hotstar from "../Images/Hotstar.jpeg";
import GoalTimer from "../Images/GoalTimer.jpeg";
import TodoApp from '../Images/Todoapp.png';
import REH from '../Images/REH.png';
import { IoMdEye } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="Page">
      <h1 className="Headline">My Projects</h1>
      <div className="Project1">
        <Card className="project-card" style={{ width: "22rem" }}>
          <div className="project-image-container">
            <div className="image-wrapper">
              <Card.Img className="project-image" variant="top" src={Hotstar} />
              <div className="overlay-text">
                <h5>Hotstar clone</h5>
                <p>
                  A Hotstar clone replicating the exact homepage layout and
                  design.
                </p>
                <Card.Body className="project-btn">
                  <a href="https://hotstarclonebydishank.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <IoMdEye className="view" />
                  </a>
                  <a href="https://github.com/Dishank002/Hotstar-Clone" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="github-link" />
                  </a>
                </Card.Body>
              </div>
            </div>
          </div>
        </Card>
        <Card className="project-card" style={{ width: "22rem" }}>
          <div className="project-image-container">
            <div className="image-wrapper">
              <Card.Img className="project-image" variant="top" src={GoalTimer} />
              <div className="overlay-text">
                <h5>Goal Timer</h5>
                <p>
                A focused timer app to manage their study sessions and break times efficiently.
                </p>
                <Card.Body className="project-btn">
                  <a href="https://goaltimer.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <IoMdEye className="view" />
                  </a>
                  <a href="https://github.com/Dishank002/Goal-Timer" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="github-link" />
                  </a>
                </Card.Body>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div className="Project2">
      <Card className="project-card" style={{ width: "22rem" }}>
          <div className="project-image-container">
            <div className="image-wrapper">
              <Card.Img className="project-image" variant="top" src={TodoApp} />
              <div className="overlay-text">
                <h5>To-Do App</h5>
                <p>
                A simple web-based To-Do app for managing daily tasks efficiently.
                </p>
                <Card.Body className="project-btn">
                  <a href="https://todoappbydishank.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <IoMdEye className="view" />
                  </a>
                  <a href="https://github.com/Dishank002/ToDo-App" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="github-link" />
                  </a>
                </Card.Body>
              </div>
            </div>
          </div>
        </Card>
        <Card className="project-card" style={{ width: "22rem" }}>
          <div className="project-image-container">
            <div className="image-wrapper">
              <Card.Img className="project-image" variant="top" src={REH} />
              <div className="overlay-text">
                <h5>Rural E-Health</h5>
                <p>
                A web platform for efficient rural healthcare management.

                </p>
                <Card.Body className="project-btn">
                  <a href="https://github.com/Dishank002/Rural-E-Health" target="_blank" rel="noopener noreferrer">
                    <IoMdEye className="view" />
                  </a>
                  <a href="https://github.com/Dishank002/Rural-E-Health" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="github-link" />
                  </a>
                </Card.Body>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default Projects;
