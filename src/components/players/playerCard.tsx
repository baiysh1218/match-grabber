import React, { FC } from "react";
import { Team } from "@/src/types/types";

import styles from "./styles.module.scss";

const PlayerCard: FC<{ teamStats: Team }> = ({ teamStats }) => {
  const { place, players, points, total_kills } = teamStats;

  return (
    <div className={styles.teamStats}>
      <div className={styles.players}>
        {players?.map((player) => (
          <div key={player.username} className={styles.player}>
            <span className={styles.playerName}>{player.username}</span>
            <span className={styles.playerKills}>
              Убийств: <span>{player.kills}</span>
            </span>
          </div>
        ))}
      </div>

      <div className={styles.teamInfo}>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Points:</span>
          <span className={styles.statValue}>+{points}</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Место:</span>
          <span className={styles.statValue}>{place}</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Всего убийств:</span>
          <span className={styles.statValue}>{total_kills}</span>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
