import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "./../../components/Button/Button";
import "./Skills.scss";

const skillListData = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        percent: 90,
      },
      {
        name: "Redux",
        percent: 85,
      },
      {
        name: "Javascript",
        percent: 85,
      },
      {
        name: "Typescript",
        percent: 85,
      },
      {
        name: "Html",
        percent: 85,
      },
      {
        name: "CSS",
        percent: 85,
      },
      {
        name: "Angular Js",
        percent: 90,
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        percent: 75,
      },
      {
        name: "Python",
        percent: 70,
      },
      {
        name: ".Net",
        percent: 70,
      },
      {
        name: "PostgreSQL",
        percent: 70,
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "UiPath",
        percent: 90,
      },
      {
        name: "Docker",
        percent: 90,
      },
    ],
  },
];

const PercentMap = ({ percent }) => {
  return (
    <div className="percent-group">
      <motion.div
        className="percent-group__rate"
        style={{ width: `${percent}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${percent}%` }}
        transition={{ delay: 0.2 }}
      />
    </div>
  );
};

const Skills = () => {
  return (
    <div className="skills">
      <h1>My Skills</h1>
      <div className="skills__list">
        {skillListData.map((skill, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 * index }}
              className="skills__content"
            >
              <h2>{skill.title}</h2>
              {skill.skills.map((sk, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 * index }}
                  className="skills__list__item"
                >
                  <p>{sk.name}</p>
                  <PercentMap percent={sk.percent} />
                </motion.div>
              ))}
            </motion.div>
          );
        })}
      </div>
      <div className="skills__button">
        <Link to="/experience">
          <Button>My Work</Button>
        </Link>
      </div>
    </div>
  );
};

export default Skills;
