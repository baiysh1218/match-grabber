"use client";
import React, { useState } from "react";

import Image from "next/image";

import PlayerList from "../players/playerList";

import dayjs from "dayjs";
import classNames from "classnames";

import { statusTranslations } from "@/src/constants";
import { Matches } from "@/src/types/types";

import ArrowDown from "@/public/images/arrowDown.svg";

import styles from "./styles.module.scss";

interface MatchCardProps {
  data: Matches;
}

const MatchCard: React.FC<MatchCardProps> = ({ data }) => {
  const { awayScore, homeScore, status, time, awayTeam, homeTeam } = data;

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
          <Image src={ArrowDown} alt="arrow" width={14} height={14} />
        </div>
        <PlayerList awayTeam={awayTeam} homeTeam={homeTeam} />
      </div>
    </>
  );
};

export default MatchCard;
