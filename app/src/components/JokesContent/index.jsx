import React from "react";
import styles from "./jcontent.module.css";
const Jokescontent = () => {
  return (
    <div className={styles.content}>
      
      <div className={styles.box}>
        <div className={styles.leftSide}>
          <p style={styles.leftTitle}></p>
        </div>
        <div className={styles.rightSide}></div>
      </div>
    </div>
  );
};

export default Jokescontent;
