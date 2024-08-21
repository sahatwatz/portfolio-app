import { useState } from "react";
import skill1 from "../assets/img/react.svg";
import skill2 from "../assets/img/figma.svg";
import skill3 from "../assets/img/premier.svg";
import skill4 from "../assets/img/photoshop.svg";
import skill5 from "../assets/img/javascript.svg";
import skill6 from "../assets/img/vue.svg";
import skill7 from "../assets/img/html.svg";
import skill8 from "../assets/img/css.svg";
import skill9 from "../assets/img/github.svg";
import skill10 from "../assets/img/toeic2.svg";
import project1 from "../assets/img/esports-web.png";
import project2 from "../assets/img/tesla.png";
import project3 from "../assets/img/honeytoast.png";
import popuptoeic from "../assets/img/popuptoeic.jpg";

export const Right = () => {

    const [popupImage, setPopupImage] = useState(null);

  const openPopup = (imageSrc) => {
    setPopupImage(imageSrc);
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  return (
    <div className="right-column">
      <div id="about-section" className="content">
        <p>
          As a student who studied at{" "}
          <a href="https://www.kmitl.ac.th/" target="_blank">
            <b>KMITL</b>
          </a>{" "}
          Faculty of Information Technology, I have learned many things that
          will be useful in the future. However, my expertise lies in website
          development as a{" "}
          <a className="link1">
            <span>Frontend Developer</span>
          </a>
          . I am proficient in using HTML, CSS, and JavaScript, including
          frameworks like React and Vue.js. Additionally, I have experience
          using other web development tools such as{" "}
          <a className="link2">
            <span>GitHub</span>
          </a>{" "}
          and{" "}
          <a className="link3">
            <span>Figma</span>
          </a>
          , which make code development and management more systematic.
          <br></br>
          <br></br>I have an interest in User Experience (UX) design and User
          Interface (UI) design, which helps me create websites that are not
          only visually appealing but also easy to use and responsive to user
          needs.<br></br>
          <br></br>I am committed to continuously learning and developing new
          skills to adapt to new technologies and trends in the industry.
          <br></br>
          <br></br>
        </p>
        <a className="text1">
          <p>
            I like to watch movies, read books, watch football, and love dogs
            and cats. This might help you get to know me better ^ ^.
          </p>
        </a>
        <div className="draw"></div>
      </div>
      <div id="skills-section" className="content2">
        <h1>SKILLs</h1>
      </div>
      <br></br>
      <div className="content-box1">
        <div>
          <img src={skill1} alt="Logo 1" />
        </div>
        <div>
          <img src={skill2} alt="Logo 2" />
        </div>
        <div>
          <img src={skill3} alt="Logo 3" />
        </div>
        <div>
          <img src={skill4} alt="Logo 4" />
        </div>
        <div>
          <img src={skill5} alt="Logo 5" />
        </div>
      </div>
      <br></br>
      <div className="content-box1">
        <div>
          <img src={skill6} alt="Logo 1" />
        </div>
        <div>
          <img src={skill7} alt="Logo 2" />
        </div>
        <div>
          <img src={skill8} alt="Logo 3" />
        </div>
        <div>
          <img src={skill9} alt="Logo 4" />
        </div>
        <div>
          <img
            src={skill10}
            alt="Logo 5"
            onClick={() => openPopup(popuptoeic)}
          />
        </div>
      </div>
      {/* Popup */}
      {popupImage && (
        <div className="popup" onClick={closePopup}>
          <img src={popupImage} alt="Popup" className="popup-image" />
          <span className="popup-close" onClick={closePopup}>
            ×
          </span>
        </div>
      )}
      <br></br>
      <div id="experience-section" className="content2">
        <h1>EXPERIENCE</h1>
      </div>
      <div className="content-box">
        <div className="year">
          <p>2024 - PRESENT</p>
        </div>

        <div className="detail">
          <h1>
            Part-Time Admin ·{" "}
            <a
              href="https://www.facebook.com/profile.php?id=100095085167540"
              className="link4"
              target="_blank"
            >
              <span>Yellow Bird Barber ⤴</span>
            </a>
          </h1>
          <p>
            As a student who studied at{" "}
            <a href="https://www.kmitl.ac.th/" target="_blank">
              <b>KMITL</b>
            </a>{" "}
            Faculty of Information Technology, I have learned many things that
            will be useful in the future. However, my expertise lies in website
            development as a{" "}
            <a className="link1">
              <span>Frontend Developer</span>
            </a>
            . I am proficient
          </p>
        </div>
      </div>

      <div className="content-box">
        <div className="year">
          <p>2019 - 2023</p>
        </div>

        <div className="detail">
          <h1>
            University Student in IT ·{" "}
            <a href="#" className="link5" target="_blank">
              <span>KMITL ⤴</span>
            </a>
          </h1>
          <p>
            In university, I learned Python, PHP, Java, and C, and used tools
            like GitHub for teamwork, CodePen for creativity, and developed
            Machine Learning models. I worked on projects with friends to
            improve teamwork and problem-solving skills. I also attended
            workshops and seminars on new technologies, gaining up-to-date
            knowledge in web development.
          </p>
        </div>
      </div>
      <div id="projects-section" className="content2">
        <h1>PROJECTs</h1>
      </div>
      <div className="content-box2">
        <div className="box-pic">
          <img src={project1} alt="project 1" />
        </div>
        <div className="box-text">
          <h1>
            <a
              href="https://psit-ffa8a.firebaseapp.com/"
              className="link6"
              target="_blank"
            >
              <span>Esports Trends · Web development ⤴</span>
            </a>
          </h1>
          <div className="box-text-text">
            <p>
              A mini project to design a website about E-sports using basic web
              development knowledge, including HTML, JavaScript, and CSS.
              Additionally, there's a small application written in Python
              available for download within the website.
            </p>
          </div>
          <div className="skill-span">
            <div className="skill-box">
              <p>HTML</p>
            </div>
            <div className="skill-box">
              <p>JavaScript</p>
            </div>
            <div className="skill-box">
              <p>CSS</p>
            </div>
          </div>
          <div className="skill-span">
            <div className="skill-box">
              <p>Python</p>
            </div>
          </div>
        </div>
      </div>

      <div className="content-box2">
        <div className="box-pic">
          <img src={project2} alt="project 2" />
        </div>
        <div className="box-text">
          <h1>
            <a
              href="https://www.youtube.com/watch?v=mTp3HBZ9lwE"
              className="link6"
              target="_blank"
            >
              <span>Tesla (clone) · Web development ⤴</span>
            </a>
          </h1>
          <div className="box-text-text">
            <p>
              An experiment to create an entirely new website, referencing the
              style of Tesla's official website. The features within the website
              include Parallax, Background Media, and Animation, among others.
            </p>
          </div>
          <div className="skill-span">
            <div className="skill-box">
              <p>HTML</p>
            </div>
            <div className="skill-box">
              <p>JavaScript</p>
            </div>
            <div className="skill-box">
              <p>CSS</p>
            </div>
          </div>
          <div className="skill-span">
            <div className="skill-box">
              <p>GitHub</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-box2">
        <div className="box-pic">
          <img src={project3} alt="project 3" />
        </div>
        <div className="box-text">
          <h1>
            <a href="#" className="link6" target="_blank">
              <span>HoneyToast · Web development ⤴</span>
            </a>
          </h1>
          <div className="box-text-text">
            <p>
              A group project to develop a website for tracking information on
              high market cap cryptocurrencies, pulling data through an API from
              external websites for display. It will also feature a database and
              backend to present general information about each coin on the
              site.
            </p>
          </div>
          <div className="skill-span">
            <div className="skill-box">
              <p>Vue</p>
            </div>
            <div className="skill-box">
              <p>Tailwind</p>
            </div>
            <div className="skill-box">
              <p>JavaScript</p>
            </div>
          </div>
          <div className="skill-span">
            <div className="skill-box">
              <p>NodeJS</p>
            </div>
            <div className="skill-box">
              <p>GitHub</p>
            </div>
          </div>
        </div>
      </div>
      <div className="for-dot">
        <div className="bouncing-loader">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="footer2">
        <h3>new project soon..</h3>
      </div>
      <div className="footer2">
        <h3>Built by Sahasawat Nantakun</h3>
      </div>
    </div>
  );
};

export default Right;
