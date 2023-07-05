import { useEffect, useState } from "react";
import HeroesInput from "../components/HeroesInput";
import { useProvider } from "../context/Provider";
import ReactLoading from "react-loading";
import ClassicCard from "../components/ClassicCard";
import Header from "../components/Header";
import Confetti from "../components/Confetti";
import { AiFillSound } from "react-icons/ai";
import staff from "../assets/staff.png";
import { useTranslation } from "react-i18next";
import ChangeLanguageBtns from "../components/ChangeLanguageBtns";

function ClassicGame() {
  const { t } = useTranslation();
  const { heroes, classicTries, classicStatus, isTransitioning } =
    useProvider();
  const [classicHeroes, setClassicHeroes] = useState();
  const [renderInput, setRenderInput] = useState(true);
  const [confetti, setConfetti] = useState(false);
  const [skillBoxHidden, setSkillBoxHidden] = useState("hidden");
  const [quoteBoxHidden, setQuoteBoxHidden] = useState("hidden");
  const [skillBtnDisabled, setskillBtnDisabled] = useState(true);
  const [quoteBtnDisabled, setQuoteBtnDisabled] = useState(true);
  const [classicClue, setClassicClue] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [rotation, setRotation] = useState("");

  useEffect(() => {
    const randomRotation = Math.floor(Math.random() * 3) + 1;
    if (randomRotation === 1) {
      setRotation("rotate-90");
    }
    if (randomRotation === 2) {
      setRotation("rotate-180");
    }
    if (randomRotation === 3) {
      setRotation("-rotate-90");
    }
  }, []);

  useEffect(() => {
    if (classicTries && heroes) {
      const filteredHeroes = heroes.filter(
        (e) => !classicTries.includes(e.name)
      );
      setClassicClue(classicTries.length);
      if (classicTries.includes(classicStatus.todayhero)) {
        setQuoteBtnDisabled(false);
        setIsCorrect(true);
        setskillBtnDisabled(false);
        setRenderInput(false);
        setConfetti(true);
      }
      setClassicHeroes(filteredHeroes);
    }
  }, [classicTries, heroes]);

  useEffect(() => {
    if (classicClue && classicClue >= 13) {
      setskillBtnDisabled(false);
    }
    if (classicClue && classicClue >= 7) {
      setQuoteBtnDisabled(false);
    }
  }, [classicClue]);

  const handleSkillBox = () => {
    setQuoteBoxHidden("hidden");
    if (skillBoxHidden === "hidden") {
      setSkillBoxHidden("");
    } else {
      setSkillBoxHidden("hidden");
    }
  };

  const handleAudioBox = () => {
    setSkillBoxHidden("hidden");
    if (quoteBoxHidden === "hidden") {
      setQuoteBoxHidden("");
    } else {
      setQuoteBoxHidden("hidden");
    }
  };

  if (heroes && classicTries && classicHeroes && classicStatus) {
    return (
      <div
        className={`fade-in text-white w-11/12 mx-auto flex flex-col items-center content-center ${
          isTransitioning ? "fade-out-btn" : "fade-in-btn"
        }`}
      >
        <ChangeLanguageBtns />
        {confetti && <Confetti />}
        <Header type="classic" />
        <div className="2xl:w-1/5 xl:w-3/12 lg:w-4/12 md:w-5/12 sm:w-5/12 mt-5 bg-gray-800 pb-4 flex text-center border-sky-900 flex-col items-center px-5 rounded-xl border-2">
          <h3 className="text-3xl my-3">{t("Guess Today's Hero!")}</h3>
          <div className="w-full flex items-center justify-steart">
            {classicClue >= 1 && (
              <div className="flex flex-col fade-in items-center w-1/2">
                <button
                  disabled={quoteBtnDisabled}
                  onClick={handleAudioBox}
                  className={`border rounded-full p-1   fade-in transition duration-300 text-white  ${
                    classicClue < 7 && !isCorrect
                      ? "hover:bg-red-700"
                      : "audio-btn hover:bg-gray-700/80"
                  }`}
                >
                  <AiFillSound size={30} className="audio-icon" />
                </button>
                {classicClue < 7 && !isCorrect ? (
                  <h3 className="text-xs fade-in">
                    {7 - classicClue} {t("Tries to Quote Clue")}
                  </h3>
                ) : (
                  <p className="fade-in text-xs">{t("Quote Clue")}</p>
                )}
              </div>
            )}
            {classicClue >= 1 && (
              <div className="flex flex-col fade-in items-center w-1/2">
                <button
                  disabled={skillBtnDisabled}
                  className={`text-white  lg:w-3/12 xs:w-4/12  w-1/2 mx-auto border p-2 border-slate-500 rounded-full 
                  ${
                    skillBtnDisabled
                      ? "bg-gray-700 hover:bg-slate-500"
                      : "bg-cyan-800 hover:bg-cyan-700 audio-btn"
                  } transition duration-400`}
                  onClick={handleSkillBox}
                >
                  <img src={staff} alt="skill" />
                </button>
                {classicClue < 13 && !isCorrect ? (
                  <h3 className="text-xs fade-in">
                    {13 - classicClue} {t("Tries to Skill Clue")}
                  </h3>
                ) : (
                  <p className="fade-in text-xs">{t("Skill Clue")}</p>
                )}
              </div>
            )}
          </div>
          <div className={`fade-in w-11/12 text-3xl my-10 ${quoteBoxHidden}`}>
            <h3>{`❝${classicStatus.quote}❞`}</h3>
          </div>
          <div className={`fade-in ${skillBoxHidden}`}>
            <img
              src={classicStatus.skillimg}
              className={`border-white grayscale rounded-md w-9/12 select-none pointer-events-none mx-auto my-5 ${rotation}`}
            />
          </div>
          <div className="">
            {classicTries.length === 0 && (
              <p className="mb-5">{t("Type a hero to begin")}</p>
            )}
            {renderInput && (
              <HeroesInput
                heroes={classicHeroes}
                type="classic"
                guessed={classicTries.includes(classicStatus.todayhero)}
              />
            )}
          </div>
        </div>
        <p className="mt-2">{`${classicStatus.count} ${t(
          "people already found out"
        )}`}</p>

        <div className="w-screen mt-10 flex justify-center fade-in-2 ">  
          <div className="flex justify-center lg:w-screen  items-start lg:items-center mx-auto flex-col overflow-auto">
          {classicTries.length > 0 && (
            <div className="flex items-center justify-center lg:w-8/12 w-[800px] text-sm mx-auto my-2">
              <div className="lg:w-1/12 w-[100px] lg:mx-1  ml-1 items-center justify-center flex border-b rounded-full">
                {t("Hero")}
              </div>
              <div className="lg:w-1/12 w-[100px] lg:mx-1 ml-5 items-center justify-center text-center flex border-b rounded-full">
                {t("Primary Attribute")}
              </div>
              <div className="lg:w-1/12 w-[100px] lg:mx-1 items-center justify-center text-center flex border-b rounded-full">
                {t("Gender")}
              </div>
              <div className="lg:w-1/12 w-[100px] lg:mx-1 items-center justify-center text-center flex border-b rounded-full">
                {t("Attack Type")}
              </div>
              <div className="lg:w-1/12 w-[100px] lg:mx-1 items-center justify-center text-center flex border-b rounded-full">
                {t("Base Attack")}
              </div>
              <div className="lg:w-1/12 w-[100px] lg:mx-1 items-center justify-center text-center flex border-b rounded-full">
                {t("Base Armor")}
              </div>
              <div className="lg:w-1/12 w-[100px] lg:mx-1 items-center justify-center text-center flex border-b rounded-full">
                {t("Base HP")}
              </div>
              <div className="lg:w-1/12 w-[100px] lg:mx-1 items-center justify-center text-center flex border-b rounded-full">
                {t("Base MP")}
              </div>
              <div className="lg:w-1/12 w-[100px] lg:mx-1 items-center justify-center text-center flex border-b rounded-full">
                {t("Move Speed")}
              </div>
            </div>
          )}
            {classicTries.map((e) => {
              return (
                <ClassicCard
                  justify={"justify-center"}
                  lastHero={classicTries[0]}
                  key={e.name}
                  selectedHero={heroes.find((e2) => e2.name === e)}
                  correctHero={heroes.find(
                    (e2) => e2.name === classicStatus.todayhero
                  )}
                />
              );
            })}
          </div>
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

export default ClassicGame;
