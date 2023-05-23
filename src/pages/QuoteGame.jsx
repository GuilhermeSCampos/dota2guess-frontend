import HeroesInput from "../components/HeroesInput";
import { useEffect, useState } from "react";
import { useProvider } from "../context/Provider";

function QuoteGame() {
  const { heroes, quoteGame, setQuoteGame } = useProvider();
  const [dailyStatus, setDailyStatus] = useState();

  const { tries } = quoteGame;
  const quoteHeroes = heroes.filter((e) => !tries.includes(e.name));

  const fetchState = async () => {
    
  }

  useEffect(() => {
    console.log("quote");
  }, []);

  return (
    <div>
      <div>QuoteGame</div>
      <HeroesInput heroes={quoteHeroes} />
    </div>
  );
}

export default QuoteGame;
