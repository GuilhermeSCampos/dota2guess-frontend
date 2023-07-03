import { useState, useEffect } from "react";

const Countdown = () => {
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    // Função para calcular o tempo restante até meia-noite
    const calculateTimeLeft = () => {
      const now = new Date();
      const midnight = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1,
        0,
        0,
        0
      );
      const timeLeft = midnight - now;

      const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
      const seconds = Math.floor((timeLeft / 1000) % 60);

      return { hours, minutes, seconds };
    };

    // Atualiza o estado do countdown a cada segundo
    const updateCountdown = () => {
      const newCountdown = calculateTimeLeft();
      setCountdown(newCountdown);
    };

    // Inicia o countdown quando o componente é montado
    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(timer);
  }, []);

  // Renderiza o countdown
  return (
    <div className="countdown">
      {countdown && (
        <div>
          <span>{countdown.hours.toString().padStart(2, "0")}</span>:
          <span>{countdown.minutes.toString().padStart(2, "0")}</span>:
          <span className="seconds">
            {countdown.seconds.toString().padStart(2, "0")}
          </span>
        </div>
      )}
    </div>
  );
};

export default Countdown;
