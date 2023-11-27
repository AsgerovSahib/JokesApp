import React from "react";
import styles from "./jcontent.module.css";
import JOkesCard from "../Card";
import { smiles } from "../../constant/smiles";
const Jokescontent = ({ data, onAzalt, onArtir }) => {
  const handleEmoji = (i) => {
    let emoji;

    if (i <= 1) {
      emoji = smiles.smile1;
    } else if (i <= 2) {
      emoji = smiles.smile2;
    } else if (i <= 4) {
      emoji = smiles.smile3;
    } else if (i <= 5) {
      emoji = smiles.smile4;
    } else if (i <= 7) {
      emoji = smiles.smile5;
    } else if (i <= 10) {
      emoji = smiles.smile6;
    }
    return emoji;
  };

  return (
    <>
      <div className={styles.content}>
        <div className={styles.box}>
          {/* ----------------leftSide */}
          <div className={styles.leftSide}>
            <p className={styles.leftTitle}>Jokes app</p>

            {/* <img src="../../media/kevin hard look.jpg" alt="" /> */}
            <img
              width={240}
              src="https://www.giantfreakinrobot.com/wp-content/uploads/2021/01/Kevin-Hart-1-1200x675.jpg"
              alt=""
            />
          </div>
          {/* ----------------rightSide */}

          <div className={styles.rightSide}>
            {data?.map((item, index) => {
              const emoji = handleEmoji(index);
              return (
                <JOkesCard
                  vote={item.vote}
                  text={item.joke}
                  emoji={emoji}
                  onDecriment={() => onAzalt(index)}
                  onIncriment={() => onArtir(index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Jokescontent;
