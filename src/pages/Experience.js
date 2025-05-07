import '../pages/Commonpage.css';
import '../pages/Experience.css';
import { FaBookOpen } from "react-icons/fa";


const Experience = () => {
  return (
    <div className="Page">
      <h1 className="Headline">My Resume</h1>
      <div class="timeline">
      <div className='container1'>
          <FaBookOpen className='Book'/>
          <div className='Education-title'>
            <p>
              <h2>Education</h2>
            </p>
          </div>
        </div>
        <div class="timeline-item">
            <div class="timeline-content">
                <h6 style={{fontWeight: "bold"}}>R. C. Patel Institute of Technology</h6>
                <h6 style={{color: "gray"}}>Bachelor of Technology in Computer Science and Engineering</h6>
                <h6 style={{color:"#FFDB70"}}>2021 - 2024</h6>
            </div>
        </div>
        <div class="timeline-item">
            <div class="timeline-content">
                <h6 style={{fontWeight: "bold"}}>G. T. P. College of Science</h6>
                <h6 style={{color: "gray"}}>+2 Science</h6>
                <h6 style={{color:"#FFDB70"}}>2018 - 2020</h6>
            </div>
        </div>
    </div>

    <div class="timeline">
      <div className='container1'>
          <FaBookOpen className='Book'/>
          <div className='Education-title'>
            <p>
              <h2>Experience</h2>
            </p>
          </div>
        </div>
        <div class="timeline-item">
            <div class="timeline-content">
                <h6 style={{fontWeight: "bold"}}>Software Developer Intern</h6>
                <h6 style={{color: "gray"}}>Sagitec Solutions Private Limited</h6>
                <h6 style={{color:"#FFDB70"}}>Feb 2024 - Mar 2025</h6>
                <ul style={{color: "gray"}}>
                  <li>Collaborated with senior developers to understand and analyze project requirements.</li>
                  <li>Translated project requirements into clear and actionable technical specifications.</li>
                  <li>Delivered high-quality, maintainable, and efficient code.</li>
                  <li>Gained hands-on experience in the full software development lifecycle.</li>
                  <li>Performed debugging, testing, and optimization of applications.</li>
                  <li>Ensured seamless integration and smooth functionality across all components.</li>
                  <li>Contributed ideas and collaborated effectively with team members on projects.</li>
                  <li>Executed tasks using C#, SQL, HTML, CSS, JavaScript, and design best practices.</li>
                  <li>Applied SOLID principles and Design Patterns in real-world project scenarios.</li>
              </ul>
            </div>
        </div>
        <div class="timeline-item">
            <div class="timeline-content">
                <h6 style={{fontWeight: "bold"}}>Java Intern</h6>
                <h6 style={{color: "gray"}}>R3 System India Private Limited</h6>
                <h6 style={{color:"#FFDB70"}}>Aug 2022 - Sep 2022</h6>
                <ul style={{color: "gray"}}>
                  <li>Collaborated with senior developers for mentorship and skill enhancement.</li>
                  <li>Shadowed experienced developers to understand coding standards and best practices.</li>
                  <li>Participated in coding workshops and continuous learning initiatives.</li>
                  <li>Explored new technologies to stay updated with industry trends.</li>
                  <li>Developed a strong foundation in Core JAVA and Advanced JAVA.</li>
                  <li>Gained hands-on experience with the Spring Framework.</li>
                  <li>Designed and developed a dynamic web application using JSP and Servlets.</li>
                  <li>Applied object-oriented programming principles in real-world projects.</li>
              </ul>
            </div>
        </div>
    </div>
    </div>
  );
};

export default Experience;


