"use client";
import React from "react";
import { ReadyState } from "react-use-websocket";

import MatchCard from "./matchCard";
import Error from "../error/error";
import Loader from "../loader/loader";

import { useSearchParams } from "next/navigation";

import styles from "./styles.module.scss";
import useMatchWebSocket from "@/src/services/hook/useWeSocket";
import { MatchStatus, Matches } from "@/src/types/types";

const MatchList = () => {
  const { lastJsonMessage, readyState, error } = useMatchWebSocket();
  const searchParams = useSearchParams();
  const status = searchParams.get("status");

  const matches = React.useMemo(() => {
    if (
      lastJsonMessage &&
      typeof lastJsonMessage === "object" &&
      "data" in lastJsonMessage
    ) {
      return (lastJsonMessage as { data: Matches[] }).data.filter((match) => {
        if (status === MatchStatus.ALL) return true;
        return match.status === status;
      });
    }
    return [];
  }, [lastJsonMessage, status]);

  if (readyState === ReadyState.CONNECTING) {
    return <Loader />;
  }

  if (readyState === ReadyState.CLOSED) {
    return (
      <Error
        error={error || "Ошибка: Соединение прервано, попробуйте обновить"}
      />
    );
  }

  return (
    <div className={styles.wrapper}>
      {matches.map((match, index) => (
        <MatchCard key={index} data={match} />
      ))}
    </div>
  );
};

export default MatchList;
