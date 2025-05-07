import '../pages/Skills.css';
import Java from '../Images/Java.webp';
import Csharp from '../Images/Csharp.png';
import Html from '../Images/Html.png';
import Css from '../Images/Css.png';
import Reactjs from '../Images/React.webp';
import DotNet from '../Images/DotNet.png';
import SQL from '../Images/SQL.png';
import Bootstrap from '../Images/Bootstrap.png';
import Git from '../Images/git.png';
import VisualStudio from '../Images/VisualStudio.png';
import vscode from '../Images/vscode.png';
import Jupyter from '../Images/Jupyter.png';
import Ssms from '../Images/SSMS.png';
import python from '../Images/python2.png';
import Flask from '../Images/Flask.png';
import Django from '../Images/Django.png';
import AI from '../Images/AI.webp';
import ML from '../Images/ML.png';
import DL from '../Images/DL.png';

const techSkills = [
  { name: 'Java', img: Java },
  { name: 'C#', img: Csharp },
  { name: 'HTML', img: Html },
  { name: 'CSS', img: Css },
  { name: 'ReactJS', img: Reactjs },
  { name: 'ASP.NET', img: DotNet },
  { name: 'SQL', img: SQL },
  { name: 'Git', img: Git },
  { name: 'Bootstrap', img: Bootstrap }
];

const tools = [
  { name: 'Visual Studio', img: VisualStudio },
  { name: 'VS Code', img: vscode },
  { name: 'Jupyter Notebook', img: Jupyter },
  { name: 'SSMS', img: Ssms }
];

const learning = [
  { name: 'Python', img: python },
  { name: 'MAchine Learning', img: ML },
  { name: 'AI', img: AI },
  { name: 'Deep Learning', img: DL },
  { name: 'Flask', img: Flask },
  { name: 'Django', img: Django }
];

const Skills = () => {
  const renderGrid = (skillsArray) => (
    <div className="grid-container">
      {skillsArray.map((skill, index) => (
        <div key={index} className="skill-box">
          <img src={skill.img} alt={skill.name} className="skill-icon" />
          <span className="skill-label">{skill.name}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="Page">
      <h1 className="Headline">My Skills</h1>

      <h4>Tech Skills</h4>
      {renderGrid(techSkills)}

      <h4>Tools & Platforms</h4>
      {renderGrid(tools)}

      <h4>Ongoing Learning</h4>
      {renderGrid(learning)}
    </div>
  );
};

export default Skills;
