import React, { FC } from "react";
import ErrorIcon from "../../../public/images/alertError.svg";
import styles from "./styles.module.scss";
import Image from "next/image";

interface ErrorProp {
  error: string | null;
}

const Error: FC<ErrorProp> = ({ error }) => {
  return (
    <div className={styles.error_wrapper}>
      <Image src={ErrorIcon} alt="error" width={120} height={120} />
      <h2 className={styles.message}>{error}</h2>{" "}
    </div>
  );
};

export default Error;
