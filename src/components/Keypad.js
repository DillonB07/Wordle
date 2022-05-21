import React, { useEffect, useState } from "react";

export default function Keypad({ usedKeys, handleKeyup }) {
  const [letters, setLetters] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/letters")
      .then((res) => res.json())
      .then((json) => {
        setLetters(json);
      });
  }, []);

  return (
    <div className="keypad">
      {letters &&
        letters.map((l) => {
          const color = usedKeys[l.key];
          return (
            <div className={color} key={l.key}>
              {l.key}
            </div>
          );
        })}
    </div>
  );
}