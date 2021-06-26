import React, { useEffect } from "react";
import { motion } from "framer-motion";
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
      <div className="home__container">
        <motion.h1
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="home__name">KALAIVANAN</span>
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
    </div>
  );
};

export default Home;
