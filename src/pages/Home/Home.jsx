import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "./../../components/Button/Button";
import "./Home.scss";

const wordingList = ["Fullstack Web Developer", "Part time Trader"];

const Home = () => {
  const [wordings, setWordings] = React.useState("");
  const [currentWordIndex, setCurrentWordIndex] = React.useState(0);

  useEffect(() => {
    const manageWording = () => {
      const currentLength = wordings.length;
      let newLetter = "";
      const currentWord = wordingList[currentWordIndex];
      if (currentWord.length > currentLength) {
        newLetter = currentWord[currentLength];
        setWordings(wordings + newLetter);
      } else {
        let newIndex = currentWordIndex + 1;
        if (!(newIndex < wordingList.length)) {
          newIndex = 0;
        }
        setCurrentWordIndex(newIndex);
        setWordings(wordingList[newIndex][0]);
      }
      return;
    };
    let st = setTimeout(manageWording, 150);
    return () => clearTimeout(st);
  }, [wordings, currentWordIndex]);

  return (
    <div className="home">
      <h1 className="home__name">KALAIVANAN</h1>
      <div className="home__container">
        <motion.h1
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7 }}
        >
          I'm a :{" "}
        </motion.h1>
        <motion.h1 transition={{ delay: 2 }}>
          {wordings.split("").map((l) => (
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {l}
            </motion.span>
          ))}
        </motion.h1>
      </div>
      <p className="home__desc">
        <span>Full stack Web developer</span> with 6 years of core experience
        and also Implemented 5 RPA projects using UIPATH, I’m very passionate to
        learn new technology and challenge me to work efficiently.
      </p>
      <div className="home__button-container">
        <Link to="/skills">
          <Button>My Skills</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
