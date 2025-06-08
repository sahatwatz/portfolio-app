/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import skill1 from "../assets/img/react.svg";
import skill2 from "../assets/img/figma.svg";
import skill3 from "../assets/img/premier.svg";
import skill4 from "../assets/img/photoshop.svg";
import skill5 from "../assets/img/javascript.svg";
import skill6 from "../assets/img/tailwindcss.svg";
import skill7 from "../assets/img/html.svg";
import skill8 from "../assets/img/css.svg";
import skill9 from "../assets/img/github.svg";
import skill10 from "../assets/img/toeic2.svg";
import project1 from "../assets/img/esports-web.png";
import project2 from "../assets/img/flash-app.png";
import project3 from "../assets/img/tannarin-port.webp";
import project4 from "../assets/img/clove.png";
import project5 from "../assets/img/kavi.png";
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
          <a
            href="https://www.kmitl.ac.th/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <b>KMITL</b>
          </a>{" "}
          Faculty of Information Technology, I have learned many things that
          will be useful in the future. However, my expertise lies in website
          development as a{" "}
          <a href="#" className="link1">
            <span>Frontend Developer</span>
          </a>
          . I am proficient in using HTML, CSS, and JavaScript, including
          frameworks like React and Vue.js. Additionally, I have experience
          using other web development tools such as{" "}
          <a href="#" className="link2">
            <span>GitHub</span>
          </a>{" "}
          and{" "}
          <a href="#" className="link3">
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
          <p>06/2025 - PRESENT</p>
        </div>
        <div className="detail">
          <h1>
            University Student in Humanities ·{" "}
            <a
              href="https://www.facebook.com/profile.php?id=100095085167540"
              className="link4"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <span>Kasetsart</span>
            </a>
          </h1>
          <p>
            I'm studying in Humanities Faculty Major English in Kasetsart
            University, Bangkok. For a better speaking, writting, understanding
            more in English that will help me to get opportunities in aboard
            work or being an international teacher in IT.
          </p>
        </div>
      </div>
      <div className="content-box">
        <div className="year">
          <p>2025 - PRESENT</p>
        </div>
        <div className="detail">
          <h1>
            Frontend Developer ·{" "}
            <a
              href="https://www.facebook.com/profile.php?id=100095085167540"
              className="link4"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <span>Freelance</span>
            </a>
          </h1>
          <p>
            My current focus is on advancing my website development capabilities
            through the practical application of tools such as Motion for
            animation, Jest for testing, and Redux for state management. I'm
            also committed to refining my UX/UI design expertise and regularly
            publishing my latest projects. Please feel free to explore my works
            down below
          </p>
        </div>
      </div>
      <div className="content-box">
        <div className="year">
          <p>2023 - 2025</p>
        </div>
        <div className="detail">
          <h1>
            Part-Time Admin ·{" "}
            <a
              href="https://www.facebook.com/profile.php?id=100095085167540"
              className="link4"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <span>Yellow Bird Barber</span>
            </a>
          </h1>
          <p>
            Manage the Facebook page and oversee the business suite on Google,
            taking care of various aspects such as responding to chats, replying
            to customer reviews, and creating graphics for different occasions.
            Since this is a part-time job, I have free time to develop my
            programming skills and continue working on website projects.
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
            <a
              href="https://www.kmitl.ac.th/"
              className="link5"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <span>KMITL</span>
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
              rel="noopener noreferrer nofollow"
            >
              <span>Esports Trends</span>
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
            <div className="skill-box bg-gradient-to-r from-orange-300 to-orange-500">
              <p>HTML</p>
            </div>
            <div className="skill-box bg-gradient-to-r from-yellow-200 to-yellow-400">
              <p>JavaScript</p>
            </div>
            <div className="skill-box bg-gradient-to-r from-cyan-200 to-cyan-500">
              <p>CSS</p>
            </div>
          </div>
          <div className="skill-span">
            <div className="skill-box bg-gradient-to-r from-yellow-300 to-blue-500">
              <p>Python</p>
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
            <a
              href="https://tannarin.vercel.app"
              className="link6"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <span>Tannarin's Portfolio</span>
            </a>
          </h1>
          <div className="box-text-text">
            <p>
              Tannarin's React and Tailwind-powered portfolio highlights her
              civil engineering expertise with a clean, responsive design. It
              features her services, projects, and personal details while using
              semantic HTML for better SEO and accessibility. Smooth navigation
              and optimized performance ensure a great user experience on all
              devices.
            </p>
          </div>
          <div className="skill-span">
            <div className="skill-box bg-gradient-to-r from-cyan-300 to-cyan-800">
              <p>React</p>
            </div>
            <div className="skill-box bg-gradient-to-r from-cyan-300 to-violet-300">
              <p>Vite</p>
            </div>
            <div className="skill-box bg-gradient-to-r from-cyan-200 to-sky-400">
              <p>Tailwind</p>
            </div>
          </div>
          <div className="skill-span">
            <div className="skill-box bg-gradient-to-r from-yellow-200 to-yellow-400">
              <p>JavaScript</p>
            </div>
            <div className="skill-box bg-gradient-to-r from-gray-300 to-gray-700">
              <p className="text-black">GitHub</p>
            </div>
          </div>
        </div>
      </div>

      <div className="content-box2">
        <div className="box-pic">
          <img src={project5} alt="project 5" />
        </div>
        <div className="box-text">
          <h1>
            <a
              href="https://kavipat.vercel.app/"
              className="link6"
              target="_blank"
            >
              <span>Kavipat's Portfolio</span>
            </a>
          </h1>
          <div className="box-text-text">
            <p>
              This is a minimalist portfolio website designed. The clean and
              simple layout puts the focus on customer's works. also having
              Motion design elements are used to create a smooth and engaging
              user experience. The site is fully responsive, ensuring optimal
              viewing on all devices.
            </p>
          </div>
          <div className="skill-span">
            <div className="skill-box bg-gradient-to-r from-cyan-300 to-cyan-800">
              <p>React</p>
            </div>
            <div className="skill-box bg-gradient-to-r from-cyan-300 to-violet-300">
              <p>Vite</p>
            </div>
            <div className="skill-box bg-gradient-to-r from-cyan-200 to-sky-400">
              <p>Tailwind</p>
            </div>
          </div>
          <div className="skill-span">
            <div className="skill-box bg-gradient-to-r from-yellow-200 to-yellow-400">
              <p>JavaScript</p>
            </div>
            <div className="skill-box bg-gradient-to-r from-gray-300 to-yellow-400">
              <p>Motion</p>
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
              href="https://flashcard-shw.vercel.app/"
              className="link6"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <span>Flashcard</span>
            </a>
          </h1>
          <div className="box-text-text">
            <p>
              Flash Card website, built with React, Vite, Tailwind CSS, and
              Supabase, allows users to view random question cards. When
              clicked, the card flips to reveal the answer. Users can add new
              cards and shuffle them in real-time, with updates synced instantly
              using Supabase.
            </p>
          </div>
          <div className="skill-span">
            <div className="skill-box bg-gradient-to-r from-cyan-300 to-cyan-800">
              <p>React</p>
            </div>
            <div className="skill-box bg-gradient-to-r from-cyan-300 to-violet-300">
              <p>Vite</p>
            </div>
            <div className="skill-box bg-gradient-to-r from-cyan-200 to-sky-400">
              <p>Tailwind</p>
            </div>
          </div>
          <div className="skill-span">
            <div className="skill-box bg-gradient-to-r from-yellow-200 to-yellow-400">
              <p>JavaScript</p>
            </div>
            <div className="skill-box bg-gradient-to-r from-green-200 to-green-300">
              <p>Supabase</p>
            </div>
          </div>
        </div>
      </div>

      <div className="content-box2">
        <div className="box-pic">
          <img src={project4} alt="project 4" />
        </div>
        <div className="box-text">
          <h1>
            <a
              href="https://playground-v.vercel.app/"
              className="link6"
              target="_blank"
            >
              <span>Valentine · Playground</span>
            </a>
          </h1>
          <div className="box-text-text">
            <p>
              During Valentine's Day, I created a Web App to enjoy the lovely
              atmosphere by using React, Vite, Tailwind and simple tools to make
              this fun Web App. It contains MusicPlayer, a Tricky refuse button
              that always runs when you try to hover it or even click on it.
              That means you can't refuse love from creator ha ha.
            </p>
          </div>
          <div className="skill-span">
            <div className="skill-box bg-gradient-to-r from-cyan-300 to-cyan-800">
              <p>React</p>
            </div>
            <div className="skill-box bg-gradient-to-r from-cyan-300 to-violet-300">
              <p>Vite</p>
            </div>
            <div className="skill-box bg-gradient-to-r from-cyan-200 to-sky-400">
              <p>Tailwind</p>
            </div>
          </div>
          <div className="skill-span">
            <div className="skill-box bg-gradient-to-r from-yellow-200 to-yellow-400">
              <p>JavaScript</p>
            </div>
            <div className="skill-box bg-gradient-to-r from-gray-300 to-gray-700">
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
        <h3>&copy; 2024 Built by Sahasawat Nantakun</h3>
      </div>
      <div className="footer2">
        <h3>v.1.0.0</h3>
      </div>
    </div>
  );
};

export default Right;
