import React, { FC, ReactNode } from "react";

import styles from "./styles.module.scss";

interface ContainerProps {
  children: ReactNode;
  noContainer?: boolean;
}

const Contaiener: FC<ContainerProps> = ({ children, noContainer = false }) => {
  if (noContainer) {
    return <>{children}</>;
  }
  return <div className={styles.container}>{children}</div>;
};

export default Contaiener;
