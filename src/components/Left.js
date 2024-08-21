import logo1 from "../assets/img/nav-icon1.svg";
import logo2 from "../assets/img/nav-icon2.svg";
import logo3 from "../assets/img/nav-icon3.svg";
import logo4 from "../assets/img/githubicon.svg";
import profile from "../assets/img/me.png";

export const Left = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      };

  return (
    <div className="left-column">
      <div className="left-content-box">
        <div className="overtop">
          <img src={profile} className="profiles" alt="Header Img" />
        </div>
        <div className="top-content">
          <h1>Sahasawat Nantakun</h1>
          {/* <img src={flag} className="flagpic" alt="Header Img" /> */}
        </div>
        <div className="role">
          <h2>Freelance Frontend Developer</h2>
        </div>
      </div>
      <div className="left-content-box">
        <div class="list">
          <ul>
            <li onClick={() => scrollToSection("about-section")}>
              <span>ABOUT</span>
            </li>
            <li onClick={() => scrollToSection("skills-section")}>
              <span>SKILLs</span>
            </li>
            <li onClick={() => scrollToSection("experience-section")}>
              <span>EXPERIENCE</span>
            </li>
            <li onClick={() => scrollToSection("projects-section")}>
              <span>PROJECTs</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="logo-container">
        <a
          href="https://www.linkedin.com/in/sahasawat-nantakun-869a64323/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <img src={logo1} alt="Logo 1" />
        </a>
        <a
          href="https://www.facebook.com/booo.483851/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <img src={logo2} alt="Logo 2" />
        </a>
        <a
          href="https://www.instagram.com/sahatwatx/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <img src={logo3} alt="Logo 3" />
        </a>
        <a
          href="https://github.com/sahatwatz"
          target="_blank"
          style={{ width: 30, height: 20 }}
          rel="noopener noreferrer nofollow"
        >
          <img src={logo4} alt="Logo 4" />
        </a>
      </div>
      <br></br>
      <div className="footer">
        <p>sahasawat.na@gmail.com</p>
      </div>
    </div>
  );
};

export default Left;
