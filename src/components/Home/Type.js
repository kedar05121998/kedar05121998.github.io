import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "FULL STACK DEVELOPER",
          "LOVE TO CODE ❤️",
          "ALWAYS BET ON JAVASCRIPT",
          "WEB DEVELOPER"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
