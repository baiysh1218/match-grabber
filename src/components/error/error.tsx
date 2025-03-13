import React, { FC } from "react";
import Image from "next/image";
import ErrorIcon from "../../../public/images/alertError.svg";
import styles from "./styles.module.scss";

interface ErrorProp {
  error: string | null;
}

const Error: FC<ErrorProp> = ({ error }) => {
  return (
    <div className={styles.error_wrapper}>
      <ErrorIcon />
      <h2 className={styles.message}>{error}</h2>{" "}
    </div>
  );
};

export default Error;
