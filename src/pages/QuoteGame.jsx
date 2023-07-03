import HeroesInput from "../components/HeroesInput";
import { useEffect, useState } from "react";
import { useProvider } from "../context/Provider";
import ReactLoading from "react-loading";
import TryCard from "../components/TryCard";
import Header from "../components/Header";
import AudioPlayer from "../components/AudioPlayer";
import { AiFillSound } from "react-icons/ai";
import Confetti from "../components/Confetti";
import { useTranslation } from "react-i18next";
import ChangeLanguageBtns from "../components/ChangeLanguageBtns";

function QuoteGame() {
  const { t } = useTranslation();
  const { heroes, quoteTries, quoteStatus, isTransitioning } = useProvider();
  const [quoteHeroes, setQuoteHeroes] = useState();
  const [audioClue, setAudioClue] = useState(0);
  const [renderInput, setRenderInput] = useState(true);
  const [toggleAudioBox, setToggleAudioBox] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);

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
      setBtnDisabled(false);
      setIsCorrect(true);
      setConfetti(true);
      setRenderInput(false);
    }
    if (quoteTries) {
      setAudioClue(quoteTries.length);
    }
  }, [quoteTries, quoteStatus]);

  const handleAudioBox = () => {
    setToggleAudioBox(!toggleAudioBox);
  };

  useEffect(() => {
    if (audioClue && audioClue >= 5) {
      setBtnDisabled(false);
    }
  }, [audioClue]);

  if (heroes && quoteHeroes && quoteTries && quoteStatus) {
    // const playSound = () => {
    //   const audio = new Audio(
    //     quoteStatus.audiolink.substring(
    //       0,
    //       quoteStatus.audiolink.indexOf(".mp3") + 4
    //     )
    //   );
    //   audio.volume = volume;
    //   audio.play();
    // };

    if (quoteStatus) {
      console.log(
        quoteStatus.audiolink.substring(
          0,
          quoteStatus.audiolink.indexOf(".mp3") + 4
        )
      );
    }

    return (
      <div  className={`fade-in text-white w-11/12 mx-auto flex flex-col items-center content-center ${
        isTransitioning ? "fade-out-btn" : "fade-in-btn"
      }`}>
        <ChangeLanguageBtns />
        {confetti && <Confetti />}
        <Header type="quote" />
        <div className="w-1/5 mt-5 bg-gray-800 pb-5 flex border-sky-900 flex-col items-center rounded-xl border-2">
          <h1 className="text-xl mt-3">{t("Which hero says")}</h1>

          <p className="text-3xl w-11/12 text-white mx-auto mt-6 text-center">
            ❝{quoteStatus.quote}❞
          </p>

          <div className="flex flex-col items-center">
            {audioClue > 0 && (
              <button
                disabled={btnDisabled}
                onClick={handleAudioBox}
                className={`border rounded-full p-1 mt-5 fade-in transition duration-300 text-white  ${
                  audioClue < 6 && !isCorrect
                    ? "hover:bg-red-700"
                    : " mb-3 audio-btn hover:bg-gray-700/80"
                }`}
              >
                <AiFillSound size={32} className="audio-icon" />
              </button>
            )}

            {audioClue < 6 && audioClue > 0 && !isCorrect ? (
              <div className="mb-2 mt-3 fade-in">
                <p>
                  {6 - audioClue} {t("Tries to Audio Clue")}
                </p>
              </div>
            ) : (
              (audioClue >= 6 || isCorrect) && (
                <div className=" fade-in">
                  <p>{t("Audio Clue")}</p>
                </div>
              )
            )}
            {toggleAudioBox && (
              <div className="mt-4">
                <AudioPlayer
                  audioSource={quoteStatus.audiolink.substring(
                    0,
                    quoteStatus.audiolink.indexOf(".mp3") + 4
                  )}
                />
              </div>
            )}

            {renderInput && (
              <div className="mt-6">
                <HeroesInput
                  heroes={quoteHeroes}
                  type={"quote"}
                  guessed={quoteTries.includes(quoteStatus.todayhero)}
                />
              </div>
            )}
          </div>
        </div>
        <p className="mt-2">{`${quoteStatus.count} ${t(
          "people already found out"
        )}`}</p>
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
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-screen h-screen justify-center">
      <ReactLoading type={"spinningBubbles"} color={"white"} width={150} />
    </div>
  );
}

export default QuoteGame;
