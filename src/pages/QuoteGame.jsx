import HeroesInput from "../components/HeroesInput";
import { useEffect, useState } from "react";
import { useProvider } from "../context/Provider";
import ReactLoading from 'react-loading';
import AudioPlayer from "../components/AudioPlayer";

function QuoteGame() {
  const { heroes, quoteTries, quoteStatus } = useProvider();
  const [quoteHeroes, setQuoteHeroes] = useState();

  useEffect(() => {
    if (heroes) {
      setQuoteHeroes(heroes)
    }
  }, [heroes]);
  
  useEffect(() => {
    if (quoteTries && heroes) {
      const filteredHeroes = heroes.filter((e) => !quoteTries.includes(e.name))
      setQuoteHeroes(filteredHeroes)
    }
  }, [quoteTries, heroes]);



  if (heroes && quoteHeroes && quoteTries && quoteStatus) {
    console.log(quoteStatus.audiolink)
    return (
      <div className="text-white">
        <div>QuoteGame</div>
        <div>
          <p className="text-xl text-white">{quoteStatus.quote}</p>
        </div>
        <div>
          <AudioPlayer src={quoteStatus.audiolink}/>
        </div>
        <HeroesInput heroes={quoteHeroes} type={"quote"}  guessed={quoteTries.includes(quoteStatus.todayhero)}/>
        <div>
          {quoteStatus? <p>{`${quoteStatus.count} Pessoas já acertaram`}</p> : <p>carregando</p>}
        </div>
        <div>
          {
            quoteTries
              .map((heroName) => {
                const hero = heroes.find((e) => e.name === heroName)
                return (
                  <div key={hero}>
                    <img src={hero.img} width={"100px"}/>
                    <span>{heroName}</span>
                  </div>
                )
              })
          }
        </div>
        <div>
          {quoteTries.includes(quoteStatus.todayhero) ? <p>Acertou!</p> : <></>}
        </div>
      </div>
    );
  }

  return (
    <ReactLoading type={"spinningBubbles"} color={"white"} height={100} width={100} />
  )

  
}

export default QuoteGame;
