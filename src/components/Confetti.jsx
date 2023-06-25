import { useEffect, useState } from "react";
import Confetti from "react-confetti";

function App() {
  const [showConfetti, setShowConfetti] = useState(false);

  const startConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000); // Duração de 5 segundos
  };

 useEffect(() => {
  startConfetti()
 },[])

  return (
    <div>
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={200} // Número de confetes
          recycle={false} // Impede a reutilização dos confetes
          gravity={0.2} // Gravidade dos confetes
          initialVelocityX={5} // Velocidade inicial horizontal
          initialVelocityY={-10} // Velocidade inicial vertical
          confettiSource={{
            x: window.innerWidth / 2,
            y: 0,
          }} // Posição da explosão de confetes
          wind={0.02}
        />
      )}
    </div>
  );
}

export default App;
