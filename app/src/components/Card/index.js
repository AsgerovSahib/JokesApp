import React from "react";

import styles from "./card.module.css";

const JOkesCard = ({
  text = "lorem ipsum",
  emoji = "emoji",
  vote = 0,
  onDecriment,
  onIncriment,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.vote}>
        <button onClick={onDecriment}> - </button>
        <span>{vote}</span>
        <button onClick={onIncriment}>+</button>
      </div>
      <div>
        <p>{text}</p>
      </div>
      <div className={styles.emoji}>{emoji}</div>
    </div>
  );
};

export default JOkesCard;
