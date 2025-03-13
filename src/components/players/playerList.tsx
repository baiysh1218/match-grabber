import React, { FC } from "react";
import PlayerCard from "./playerCard";

import { TeamStatsProps } from "@/src/types/types";

import styles from "./styles.module.scss";

const PlayerList: FC<TeamStatsProps> = ({ awayTeam, homeTeam }) => {
  return (
    <div className={styles.wrapper}>
      <PlayerCard teamStats={awayTeam} />
      <PlayerCard teamStats={homeTeam} />
    </div>
  );
};

export default PlayerList;
