import React from "react";

export default function Modal({ isCorrect, turn, solution }) {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>You win!</h1>
          <p>
            The solution was <span className="solution">{solution}</span>!
          </p>
          <p>
            You found the solution in {turn} guess{turn > 1 ? "es" : ""}!
          </p>
          <a href="/">Play again?</a>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>You lose!</h1>
          <p>
            The solution was <span className="solution">{solution}</span>!
          </p>
          <p>Better luck next time!</p>
          <a href="/">Try again?</a>
        </div>
      )}
    </div>
  );
}
