import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./Experience.scss";

const experiences = [
  {
    title: "Senior Developer",
    company: "SquareArk",
    domain: "Retail & Ecommerce",
    duration: {
      from: "Sept, 2020",
      to: "Current",
    },
    skills: [
      "React.Js",
      "Django",
      "PostgreSQL",
      "Docker",
      "CI/CD",
      "Python",
      "GraphQL",
      "Javascript",
      "Github",
      "Github Actions",
      "HTML",
      "CSS",
      "Typescript",
    ],

    rolesNResponsiblity: [
      "Research, design and implemented project from scratch.",
      "Implemented CI/CD for whole project flow.",
      "Worked closely with UX/UI to understand their design thought process and develop",
      "Implemented on 3 front end react application, one front end portal is implemented in PWA.",
      "Developed 1 shopify app to allow customer register and invite friends for our private friends and family sales.",
      "Lead offshore development team.",
    ],
  },
  {
    title: "Associate Developer",
    company: "AXA HK(KGiSL)",
    domain: "Insurance",
    duration: {
      from: "Jul, 2018",
      to: "Aug, 2020",
    },
    skills: [
      "React.Js",
      "Node.Js",
      "UiPath",
      ".Net",
      "MSSQL",
      "Github",
      "Javascript",
      "HTML",
      "CSS",
      "REST API",
    ],

    rolesNResponsiblity: [
      "Worked closely with operation team to understand their process flow and identified oppurunity to automate their work to remove manual error and reduce time for processing.",
      "Designed and implemented web applications for operation user to reduce the processing time for EB claims and new applications.",
      "Implemented 4-5 RPA projects contains automation on web application, AS400, MS Excel, etc...",
      "Worked with other technical team to integrate multiple system to automate efficiently.",
    ],
  },
  {
    title: "System Engineer",
    domain: "Saas",
    company: "Tata Consultancy Services",
    duration: {
      from: "Jul, 2018",
      to: "Aug, 2020",
    },
    skills: ["Angular 4", "Node.Js", "PHP", "MySQL", "JQuery", "Javascript"],
    rolesNResponsiblity: [
      "Worked with innovative team to develop SaaS product for NGOs and Welfare activies to run raise funds and monitor funds.",
      "Revamped the whole application from PHP to NodeJs and AngularJS.",
      "Handled dynamic form creation and handling form submission and permission.",
    ],
  },
];

const Experience = () => {
  const [experienceList] = React.useState(experiences);

  return (
    <div className="experience">
      <h1 className="experience__title">Experience</h1>
      <div className="experience__list">
        {experienceList.map((ex, index) => (
          <motion.div
            key={index}
            initial={{
              x: -1500,
            }}
            animate={{
              x: 0,
            }}
            transition={{
              delay: 0.3 * index,
              duration: 0.5 * (index + 1),
            }}
          >
            <h2 className="experience__list__title">{ex.title}</h2>
            <div className="experience__list__item" key={index}>
              <h5 className="experience__list__company">
                Company: <span>{ex.company}</span>
              </h5>
              <div>
                <p>Domain: {ex.domain}</p>
                <p>
                  {ex.duration.from} - {ex.duration.to}
                </p>
              </div>
              <h5 className="experience__list__skill">Skills</h5>
              <p className="experience__list__skills">
                {ex.skills.join(", ")}.
              </p>
              <h5 className="experience__list__role">
                Roles and Responsiblity
              </h5>
              <ul className="experience__list__roles">
                {ex.rolesNResponsiblity.map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="experience__button-container">
        <Link to="/contact-me">
          <Button>Contact Me</Button>
        </Link>
      </div>
    </div>
  );
};

export default Experience;
