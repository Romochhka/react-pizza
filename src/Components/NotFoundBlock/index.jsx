import React from "react";

import styles from "./NotFoundBlock.module.scss";

console.log(styles);

export const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>Ничего не найдено 😕 </h1>
      <p className={styles.description}>
        Данная страница отсутствует в нашем интернет-магазине
      </p>
    </div>
  );
};
