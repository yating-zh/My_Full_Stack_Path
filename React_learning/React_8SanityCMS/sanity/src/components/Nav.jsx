import "./nav.css";
import logo_dark from "../assets/logo-dark.webp";
import demo from "../assets/demo.png";

export default function Nav() {
  return (
    <div className="nav">
      <input type="checkbox" id="sidebar-active" />
      <label htmlFor="sidebar-active" className="open-sidebar-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#1f1f1f"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>{" "}
      </label>

      <label id="overlay" htmlFor="sidebar-active"></label>

      <div className="links-container">
        <label htmlFor="sidebar-active" className="close-sidebar-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#1f1f1f"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </label>

        <a className="home-link" href="#">
          {/*<img src={logo_dark} alt="logo" />*/}
          <img src={demo} alt="logo" />
          <h2>Headless CMS</h2>
        </a>
        <a href="#home">Home</a>
        <a href="#product">Product</a>
        <a href="#feature">Features</a>
        <a className="login-link" href="#">
          Login
        </a>
      </div>
    </div>
  );
}
