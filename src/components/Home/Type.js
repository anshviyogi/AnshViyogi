import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <>
      <Typewriter
        options={{
          strings: [
            "Sr. Software Developer",
            "MERN Stack Developer",
            "Mentor",
            "Team Lead",
            "Freelancer",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </>
  );
}

export default Type;
