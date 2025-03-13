import React, { FC } from "react";
import PlayerCard from "./playerCard";

import styles from "./styles.module.scss";
import { TeamStatsProps } from "@/types/types";

const PlayerList: FC<TeamStatsProps> = ({ awayTeam, homeTeam }) => {
  return (
    <div className={styles.wrapper}>
      <PlayerCard teamStats={awayTeam} />
      <PlayerCard teamStats={homeTeam} />
    </div>
  );
};

export default PlayerList;
