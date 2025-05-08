import React from "react";
import "../pages/About.css";
import "../pages/Commonpage.css";
// import AI from '../Images/AI.png';
// import DS from '../Images/DS.png';
// import ML from '../Images/ML.png';
// import Python from '../Images/Python.png';
import AI from "../Assets/artificial-intelegence.png";
import DS from "../Assets/algorithm2.png";
import ML from "../Assets/brain.png";
import Python from "../Assets/python2.png";
// import { ReactComponent as PythonIcon } from '../Assets/python.svg';
import Card from "react-bootstrap/Card";

const About = () => {
  return (
    <div className="Page">
      <h1 className="Headline">About Me</h1>
      <p className="about-paragrapth">
        A passionate Full Stack Developer with a solid command of both front-end
        and back-end technologies, including React.js, C#, SQL, HTML, and CSS. I
        enjoy building complete, scalable web applications from the ground up -
        crafting clean UIs on the front-end and ensuring solid logic and
        performance on the back-end. My experience in real-world projects has
        shaped a well-rounded skill set and a practical understanding of how
        great software is built.
        <br></br>
        <br></br>
        I’m driven by a problem-solving mindset, a love for clean architecture,
        and a commitment to continuous learning. Whether collaborating with a
        team or tackling challenges independently, I bring energy, precision,
        and a user-first approach to every project. <br></br>
        <br></br>Let’s create meaningful digital solutions that not only
        work—but stand out. Let’s build something amazing together! 🚀
      </p>
      <br></br>
      <h4 className="What-i-learn-title">What I'm learning</h4>
      <div className="What-i-learn">
        <div className="box12">      
        <Card
          className="d-flex flex-row align-items-center card-main" style={{ width: "30rem", backgroundColor: "#1c1c1c" }}>
          <Card.Img className="card-image" src={Python} style={{width: "25%", height: "auto", objectFit: "contain", padding: "10px",}}/>
          <Card.Body className="card-body" style={{ color: "white" }}>
            <Card.Title>Python</Card.Title>
            <Card.Text className="Card-Text">
            Mastering the foundation of AI and automation with Python.

            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          className="d-flex flex-row align-items-center card-main" style={{ width: "30rem", backgroundColor: "#1c1c1c" }}>
          <Card.Img className="card-image" src={ML} style={{width: "25%", height: "auto", objectFit: "contain", padding: "10px",}}/>
          <Card.Body className="card-body" style={{ color: "white" }}>
            <Card.Title>Machine Learning</Card.Title>
            <Card.Text className="Card-Text">
            Exploring algorithms that help systems learn and improve.
            
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
        <div className="box34">
        <Card
          className="d-flex flex-row align-items-center card-main" style={{ width: "30rem", backgroundColor: "#1c1c1c" }}>
          <Card.Img className="card-image" src={DS} style={{width: "25%", height: "auto", objectFit: "contain", padding: "10px",}}/>
          <Card.Body className="card-body" style={{ color: "white" }}>
            <Card.Title>Data Structures And Algorithms</Card.Title>
            <Card.Text className="Card-Text">
            Studying efficient ways to store and organize data for better performance.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          className="d-flex flex-row align-items-center card-main" style={{ width: "30rem", backgroundColor: "#1c1c1c" }}>
          <Card.Img className="card-image" src={AI} style={{width: "25%", height: "auto", objectFit: "contain", padding: "10px",}}/>
          <Card.Body className="card-body" style={{ color: "white" }}>
            <Card.Title>Artificial Intelligence</Card.Title>
            <Card.Text className="Card-Text">
            Diving into AI concepts to build intelligent solutions.

            </Card.Text>
          </Card.Body>
        </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
