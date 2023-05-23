import HeroesInput from "../components/HeroesInput";
import { useEffect, useState } from "react";
import { useProvider } from "../context/Provider";

function QuoteGame() {
  const { heroes, quoteTries, quoteStatus } = useProvider();
  const [quoteHeroes, setQuoteHeroes] = useState();
  const [gambiarra, setGambiarra] = useState(true);

  useEffect(() => {
    if (heroes) {
      setQuoteHeroes(heroes)
    }
  }, [heroes]);
  
  useEffect(() => {
    console.log(quoteTries, "quote tries")
    console.log(heroes, "heroes")
    if (quoteTries && heroes) {
      const filteredHeroes = heroes.filter((e) => !quoteTries.includes(e.name))
      setQuoteHeroes(filteredHeroes)
      console.log(filteredHeroes)
    }
  }, [quoteTries, heroes]);

  useEffect(() => {
    setGambiarra(!gambiarra)
  }, [quoteHeroes])

  return (
    <div>
      <div>QuoteGame</div>
      { heroes && quoteHeroes && quoteTries ? <HeroesInput heroes={quoteHeroes} type={"quote"} /> : <p>carregando</p>}
      <div>
        {quoteStatus? <p>{`${quoteStatus.count} Pessoas já acertaram`}</p> : <p>carregando</p>}
      </div>
    </div>
  );
}

export default QuoteGame;
