import React, { ButtonHTMLAttributes, FC } from "react";
import classNames from "classnames";

import refresh from "../../../../public/images/Refresh.svg";

import Image from "next/image";

import styles from "./styles.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  loading?: boolean;
  error?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  loading = false,
  error = false,
  disabled = false,
  ...rest
}) => {
  const buttonClasses = classNames(styles.button, {
    [styles.primary]: variant === "primary",
    [styles.secondary]: variant === "secondary",
    [styles.error]: error,
    [styles.disabled]: disabled || loading,
  });

  return (
    <div className={styles.wrapper}>
      <button
        className={buttonClasses}
        disabled={disabled || loading}
        {...rest}
      >
        {error && (
          <Image
            src={"/public/images/Refresh.svg"}
            alt="error"
            width={28}
            height={28}
          />
        )}

        {children}

        {variant === "primary" && (
          <Image
            src={"/public/images/Refresh.svg"}
            alt="refresh"
            width={26}
            height={26}
          />
        )}
      </button>
    </div>
  );
};

export default Button;
