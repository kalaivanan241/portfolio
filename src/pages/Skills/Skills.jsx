import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "./../../components/Button/Button";
import "./Skills.scss";

const skillList = [
  {
    name: "React Js",
    percent: 90,
  },
  {
    name: "Javascript",
    percent: 85,
  },
  {
    name: "Node Js",
    percent: 75,
  },
  {
    name: "Python",
    percent: 70,
  },
  {
    name: "UiPath",
    percent: 90,
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
    name: "PostgreSQL",
    percent: 70,
  },
];

const PercentMap = ({ percent }) => {
  return (
    <div className="percent-group">
      <motion.div
        className="percent-group__rate"
        style={{ width: `${percent}%` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      />
    </div>
  );
};

const Skills = () => {
  const [skills, setSkills] = useState(
    skillList.map((skill) => {
      return { ...skill, percent: 0 };
    })
  );

  useEffect(() => {
    setTimeout(() => {
      setSkills(skillList);
    }, 300);
  }, []);
  return (
    <div className="skills">
      <h1>My Skills</h1>
      <div className="skills__list">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 * index }}
            className="skills__list__item"
          >
            <h3>{skill.name}</h3>
            <PercentMap percent={skill.percent} />
          </motion.div>
        ))}
      </div>
      <div className="skills__button">
        <Link to="/experience">
          <Button variant="secondary">My Work</Button>
        </Link>
      </div>
    </div>
  );
};

export default Skills;
