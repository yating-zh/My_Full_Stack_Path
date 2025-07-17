import "./cover.css";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../assets/myAnimation.json";

export default function Cover() {
  return (
    <div id="home">
      <div className="cover">
        <div className="coverText">
          <p>
            <span className="uppercase">Yating's Demo</span>
          </p>
          <h1 className="slogan">
            A Demo of
            <span className="focus_text"> Sanity CMS </span> With Responsive
            Layout.
          </h1>
          <p>This demo is my first hands-on experience with a Headless CMS.</p>
          <button>Express Interest</button>
        </div>
        <div className="coverImg">
          <Player
            autoplay
            loop
            src={animationData}
            //style={{ height: "300px", width: "300px" }}
          />{" "}
        </div>
      </div>
      <div className="description">
        <h2>
          This demo showcases a responsive layout built using HTML, CSS,
          JavaScript, Node.js, and Sanity CMS as the headless backend.
        </h2>
        <div className="descriptionText">
          <p>
            Content is managed dynamically through Sanity CMS — even someone
            without a technical background can easily update or publish content.
            This project is my first hands-on experience with a Headless CMS. It
            reflects my ability to learn quickly and apply new tools
            effectively.
          </p>
          <p>
            I'm passionate about continuous learning and always eager to explore
            new technologies that enhance modern web development.
          </p>
        </div>
      </div>
    </div>
  );
}
