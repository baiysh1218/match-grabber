"use client";

import Image from "next/image";

import Logo from "@/public/images/Logo.svg";

import { MatchStatus } from "@/src/types/types";
import useMatchWebSocket from "@/src/services/hook/useWeSocket";

import Select from "../../shared/select/select";
import Button from "../../shared/button/button";

import styles from "./styles.module.scss";

const options = [
  {
    title: "Все статусы",
    value: MatchStatus.ALL,
  },
  {
    title: "Завершенные",
    value: MatchStatus.FINISHED,
  },
  {
    title: "В эфире",
    value: MatchStatus.ONGOING,
  },
  {
    title: "Запланированные",
    value: MatchStatus.SCHEDULED,
  },
];

const Header = () => {
  const { loading, error, handleReconnect } = useMatchWebSocket();

  return (
    <nav className={styles.wrapper}>
      <div className={styles.nav_left_side}>
        <div>
          <Image src={Logo} alt="logo" width={257} height={32} />
        </div>
        <Select defaultValue={options[0].title} options={options} />
      </div>
      <div className={styles.nav_right_side}>
        <div className={styles.error_wrapper}>
          {error && (
            <Button variant="secondary" error>
              {error}
            </Button>
          )}
        </div>
        <div className={styles.refresh_wrapper}>
          <Button loading={loading} onClick={handleReconnect}>
            Обновить
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
