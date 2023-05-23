import HeroesInput from "../components/HeroesInput";
import { useEffect, useState } from "react";
import { useProvider } from "../context/Provider";
import ReactLoading from "react-loading";

function QuoteGame() {
  const { heroes, quoteTries, quoteStatus } = useProvider();
  const [quoteHeroes, setQuoteHeroes] = useState();
  const [audioClue, setAudioClue] = useState(0);
  const [renderInput, setRenderInput] = useState(true);

  useEffect(() => {
    if (quoteTries && heroes) {
      const filteredHeroes = heroes.filter((e) => !quoteTries.includes(e.name));
      setQuoteHeroes(filteredHeroes);
    }
  }, [quoteTries, heroes]);

  useEffect(() => {
    if (quoteTries && quoteTries.includes(quoteStatus.todayhero)) {
      setRenderInput(false);
    }
    if (quoteTries) { 
      setAudioClue(quoteTries.length); }
  }, [quoteTries, quoteStatus]);

  if (heroes && quoteHeroes && quoteTries && quoteStatus) {
    console.log(quoteStatus.audiolink);

    const playSound = () => {
      var audio = new Audio(
        quoteStatus.audiolink.substring(
          0,
          quoteStatus.audiolink.indexOf(".mp3") + 4
        )
      );
      audio.play();
    };

    return (
      <div className="text-white flex flex-col lg:mt-56 items-center content-center">
        <div className="border border-r-2 border-red-500 flex flex-col items-center content-center">
          <h1 className="text-2xl">Which hero says</h1>

          <p className="text-4xl w-8/12 text-white pt-4 pb-4">
            ❝{quoteStatus.quote}❞
          </p>

          <div>
            <>
            { renderInput && audioClue >= 5 && <div>
               <img
                className="h-12"
                src="https://cdn-icons-png.flaticon.com/512/2468/2468825.png"
                onClick={() => playSound()}
              />
              <p>Audio Clue</p>
            </div> }
            { renderInput && audioClue < 5 && 
            <div>
              <img
                className="h-12 grayscale"
                src="https://cdn-icons-png.flaticon.com/512/2468/2468825.png"
              />
              <p>Audio Clue in {5 - audioClue } tries</p>
            </div>
            }
            </>
          </div> 


        </div>
        {renderInput && (
          <HeroesInput
            heroes={quoteHeroes}
            type={"quote"}
            guessed={quoteTries.includes(quoteStatus.todayhero)}
          />
        )}
        <div>
          {quoteStatus ? (
            <p>{`${quoteStatus.count} people already found out`}</p>
          ) : (
            <p>carregando</p>
          )}
        </div>

        <div>
          {quoteTries.map((heroName) => {
            const hero = heroes.find((e) => e.name === heroName);

            if (!hero) return null;
            if (heroName === quoteStatus.todayhero)
              return (
                <div
                  className="flex flex-col items-center border-4 border-zinc-50 pt-2 w-64 h-20 mt-2 bg-green-600"
                  key={hero}
                >
                  <img
                    className="w-16 border-solid border-2 border-black"
                    src={hero.img}
                  />
                  <span>{heroName}</span>
                </div>
              );
            else
              return (
                <div
                  className="flex flex-col items-center pt-4 border border-zinc-300 w-64 h-20 mt-2 bg-red-600"
                  key={hero}
                >
                  <img
                    className="w-16 border-solid border-2 border-black"
                    src={hero.img}
                  />
                  <span>{heroName}</span>
                </div>
              );
          })}
        </div>
        <div>{!renderInput && <p>Acertou!</p>}</div>
      </div>
    );
  }

  return (
    <ReactLoading
      type={"spinningBubbles"}
      color={"white"}
      height={100}
      width={100}
    />
  );
}

export default QuoteGame;
