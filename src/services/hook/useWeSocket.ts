import { useEffect, useState, useCallback } from "react";
import useWebSocket from "react-use-websocket";

interface WebSocketMessage {
  type: string;
  data?: any;
  message?: string;
}

const useMatchWebSocket = () => {
  const socketUrl = process.env.NEXT_PUBLIC_WS_URL || "";
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isManualReconnect, setIsManualReconnect] = useState(false);

  const { lastJsonMessage, readyState, getWebSocket } =
    useWebSocket<WebSocketMessage>(socketUrl, {
      onOpen: () => {
        setLoading(false);
        setError(null);
        setIsManualReconnect(false);
      },
      onClose: () => {
        setLoading(false);
        if (!isManualReconnect) {
          setError("Ошибка: Соединение прервано, попробуйте обновить");
        }
      },
      onError: () => {
        setLoading(false);
        setError("Ошибка: Произошла ошибка, попробуйте обновить");
      },
      shouldReconnect: () => true,
    });

  useEffect(() => {
    if (lastJsonMessage && typeof lastJsonMessage === "object") {
      if (lastJsonMessage.type === "error" && lastJsonMessage.message) {
        setError(lastJsonMessage.message);
      } else {
        setError(null);
      }
    }
  }, [lastJsonMessage]);

  const handleReconnect = useCallback(() => {
    setLoading(true);
    setIsManualReconnect(true);
    const ws = getWebSocket();
    if (ws) {
      ws.close();
    }
    setError(null);
  }, [getWebSocket]);

  return { lastJsonMessage, readyState, loading, error, handleReconnect };
};

export default useMatchWebSocket;
