"use client";
import Select from "@/components/shared/select/select";
import Button from "@/components/shared/button/button";
import { MatchStatus } from "@/types/types";
import logo from "../../../../public/images/Logo.svg";
import useMatchWebSocket from "@/services/hook/useWeSocket";

import styles from "./styles.module.scss";
import Image from "next/image";

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
          <Image src={logo.src} alt="logo" width={257} height={32} />
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
