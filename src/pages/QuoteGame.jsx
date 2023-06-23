import HeroesInput from "../components/HeroesInput";
import { useEffect, useState } from "react";
import { useProvider } from "../context/Provider";
import ReactLoading from "react-loading";
import TryCard from "../components/TryCard";
import Header from "../components/Header";

function QuoteGame() {
  const { heroes, quoteTries, quoteStatus } = useProvider();
  const [quoteHeroes, setQuoteHeroes] = useState();
  const [audioClue, setAudioClue] = useState(0);
  const [renderInput, setRenderInput] = useState(true);
  const [volume, setVolume] = useState(0.5);

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  useEffect(() => {
    if (quoteTries && heroes) {
      const filteredHeroes = heroes.filter((e) => !quoteTries.includes(e.name));
      setQuoteHeroes(filteredHeroes);
    }
  }, [quoteTries, heroes]);

  useEffect(() => {
    if (
      quoteTries &&
      quoteStatus &&
      quoteTries.includes(quoteStatus.todayhero)
    ) {
      setRenderInput(false);
    }
    if (quoteTries) {
      setAudioClue(quoteTries.length);
    }
  }, [quoteTries, quoteStatus]);

  if (heroes && quoteHeroes && quoteTries && quoteStatus) {
    const playSound = () => {
      const audio = new Audio(
        quoteStatus.audiolink.substring(
          0,
          quoteStatus.audiolink.indexOf(".mp3") + 4
        )
      );
      audio.volume = volume;
      audio.play();
    };

    return (
      <div className="fade-in text-white flex flex-col lg:mt-16 items-center">
        <Header />
        <div className="border border-r-2 border-red-500 flex flex-col items-center content-center">
          <h1 className="text-2xl">Which hero says</h1>

          <p className="text-4xl w-8/12 text-white pt-4 pb-4">
            ❝{quoteStatus.quote}❞
          </p>

          <div>
            <div>
              {renderInput && audioClue >= 5 && (
                <div>
                  <img
                    className="h-12"
                    src="https://cdn-icons-png.flaticon.com/512/2468/2468825.png"
                    onClick={() => playSound()}
                  />
                  <p>Audio Clue</p>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={handleVolumeChange}
                  />
                </div>
              )}
              {renderInput && audioClue < 5 && (
                <div>
                  <img
                    className="h-12 grayscale"
                    src="https://cdn-icons-png.flaticon.com/512/2468/2468825.png"
                  />
                  <p>Audio Clue in {5 - audioClue} tries</p>
                </div>
              )}
            </div>
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

        <div className="w-5/12 ">
          {quoteTries.map((heroName) => {
            const hero = heroes.find((e) => e.name === heroName);

            if (!hero) return null;
            if (heroName === quoteStatus.todayhero)
              return <TryCard key={heroName} hero={hero} correctHero={true} />;
            else
              return <TryCard key={heroName} hero={hero} correctHero={false} />;
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
