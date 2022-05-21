import React from "react";
import Row from "./Row";

export default function Grid({ currentGuess, guesses, turn }) {
  return (
    <div>
      {guesses.map((g, i) => {
        if (turn === i) {
          return <Row currentGuess={currentGuess} key={i} />;
        }
        return <Row guess={g} key={i} />;
      })}
    </div>
  );
}
