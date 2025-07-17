import reporting from "../assets/reporting.png";
import "./features.css";

export default function Features() {
  return (
    <div id="feature">
      <div className="features">
        <div className="featureTitle">
          <div className="upperCase">Features</div>
          <h2>
            From data to decisions—<span className="focus">faster</span>.{" "}
          </h2>
        </div>
        <div className="fcards">
          <div className="fcard">
            <div className="fcardIcon">
              <img src={reporting} alt="icon" />
            </div>
            <div className="fcardTitle">Tech of this Project</div>
            <div className="fcardDescription">
              This demo showcases a responsive layout built using HTML, CSS,
              JavaScript, Node.js, and Sanity CMS as the headless backend.
              Content is managed dynamically through Sanity CMS — even someone
              without a technical background can easily update or publish
              content. This project is my first hands-on experience with a
              Headless CMS. It reflects my ability to learn quickly and apply
              new tools effectively. I'm passionate about continuous learning
              and always eager to explore new technologies that enhance modern
              web development.
            </div>
          </div>
          <div className="fcard">
            <div className="fcardIcon">
              <img src={reporting} alt="icon" />
            </div>
            <div className="fcardTitle">Design</div>
            <div className="fcardDescription">
              This demo was created with modern design principles in mind —
              focusing on visual clarity, layout consistency, and smooth
              responsiveness across all device sizes. Every detail matters, from
              clean, maintainable code to an intuitive user interface that
              adapts seamlessly to mobile, tablet, and desktop screens.
            </div>
          </div>
        </div>
        <div className="aboutUs">
          <div>
            <h2>About Yating</h2>
            <p>
              Motivated Computer Science master's graduate with a GPA of 6+,
              seeking a junior role in the IT industry to apply technical skills
              and continue growing. Alongside my studies, I worked as a tutor at
              UQ, enhancing my communication and mentoring skills. Previously, I
              spent five years as a project planner at a manufacturing company,
              developing strong problem- solving and organisational abilities.
              Available to start immediately. <a href="#">here</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
