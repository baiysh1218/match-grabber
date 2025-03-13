"use client";
import React, { FC, useState, useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import classNames from "classnames";
import styles from "./styles.module.scss";

interface SelectProps {
  options: { title: string; value: string }[];
  title?: string;
  subtitle?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

const Select: FC<SelectProps> = ({
  options,
  title,
  subtitle,
  defaultValue,
  onChange,
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(
    defaultValue || null
  );
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const status = searchParams.get("status");
    if (status) {
      const option = options.find((opt) => opt.value === status);
      if (option) {
        setSelectedOption(option.title);
      }
    }
  }, [searchParams, options]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: { title: string; value: string }) => {
    setSelectedOption(option.title);
    setIsOpen(false);

    const params = new URLSearchParams(searchParams.toString());
    params.set("status", option.value);
    router.push(`?${params.toString()}`);

    if (onChange) {
      onChange(option.value);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.wrapper} ref={selectRef}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

      <div
        className={classNames(styles.custom_select, { [styles.open]: isOpen })}
      >
        <button
          className={styles.select_button}
          onClick={toggleDropdown}
          aria-label="select button"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <span className={styles.selected_value}>{selectedOption}</span>
          <span
            className={classNames(styles.arrow, {
              [styles.arrow_open]: isOpen,
            })}
          ></span>
        </button>
        <ul className={styles.select_dropdown} role="listbox">
          {options.map((option) => (
            <li
              key={option.value}
              role="option"
              onClick={() => handleOptionClick(option)}
            >
              {option.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Select;
