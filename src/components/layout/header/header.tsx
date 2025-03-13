"use client";
import Image from "next/image";
import Select from "@/components/shared/select/select";
import Button from "@/components/shared/button/button";
import { MatchStatus } from "@/types/types";
import Logo from "../../../../public/images/Logo.svg";
import styles from "./styles.module.scss";
import useMatchWebSocket from "@/services/hook/useWeSocket";

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
        <Logo />
        <Select defaultValue={options[0].title} options={options} />
      </div>
      <div className={styles.nav_right_side}>
        {error && (
          <Button variant="secondary" error>
            {error}
          </Button>
        )}
        <Button loading={loading} onClick={handleReconnect}>
          Обновить
        </Button>
      </div>
    </nav>
  );
};

export default Header;
