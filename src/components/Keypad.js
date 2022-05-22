import React, { useEffect, useState } from "react";
import data from "../data/db.json";

export default function Keypad({ usedKeys }) {
  const [letters, setLetters] = useState(null);

  useEffect(() => {
    setLetters(data.letters);
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
