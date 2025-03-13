"use client";
import React, { useState } from "react";
import Arrow from "../../../public/images/arrowDown.svg";
import styles from "./styles.module.scss";
import Image from "next/image";
import classNames from "classnames";
import PlayerList from "../players/playerList";
import { Matches } from "@/types/types";
import dayjs from "dayjs";
import { statusTranslations } from "@/constants";

interface MatchCardProps {
  data: Matches;
}

const MatchCard: React.FC<MatchCardProps> = ({ data }) => {
  const { awayScore, homeScore, status, time, title, awayTeam, homeTeam } =
    data;

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className={classNames(styles.matchCard, { [styles.open]: isOpen })}>
        <div className={styles.teams}>
          <span>{homeTeam.name}</span>
          <div className={styles.centered}>
            <span className={styles.score}>
              {awayScore} : {homeScore}
            </span>
            <div className={classNames(styles[status], styles.status)}>
              {statusTranslations[status]}
            </div>
            <div className={styles.time}>
              {dayjs(time).format("DD MMMM YYYY")}
            </div>
          </div>
          <span className={styles.secondTeam}>{awayTeam.name}</span>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={classNames(styles.arrow, { [styles.open]: isOpen })}
        >
          <Image src={Arrow} alt="arrow" />
        </div>
        <PlayerList awayTeam={awayTeam} homeTeam={homeTeam} />
      </div>
    </>
  );
};

export default MatchCard;
