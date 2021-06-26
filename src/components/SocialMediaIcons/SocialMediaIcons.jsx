import React from "react";
import "./SocialMediaIcons.scss";

const SocialMediaIcons = () => {
  return (
    <div className="social-media-icons">
      <a href="https://github.com/kalaivanan241">
        <img
          height="32"
          width="32"
          src="https://unpkg.com/simple-icons@v5/icons/github.svg"
          alt="github"
        />
      </a>
      <a href="https://www.linkedin.com/in/kalaivanan-gunasekaran-129b89155/">
        <img
          height="32"
          width="32"
          src="https://unpkg.com/simple-icons@v5/icons/linkedin.svg"
          alt="linkedIn"
        />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
