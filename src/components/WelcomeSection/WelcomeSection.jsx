import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import "./WelcomeSection.scss";

const Welcome = () => {
  return (
    <div>
      <div className="video-section">
        <YoutubeEmbed />
      </div>

      <div className="text-block">
        <h2>Saving for your family in an ethical way</h2>
        <p className="paragraph">
          Al Rayan Bank helps its customers to own their own homes, save for
          their families' futures and expand their businesses without
          compromising their faith or their values. This is Neil's story.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
