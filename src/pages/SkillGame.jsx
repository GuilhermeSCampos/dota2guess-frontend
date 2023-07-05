import { useEffect, useState } from "react";
import HeroesInput from "../components/HeroesInput";
import { useProvider } from "../context/Provider";
import ReactLoading from "react-loading";
import TryCard from "../components/TryCard";
import Header from "../components/Header";
import staff from "../assets/staff.png";
import Confetti from "../components/Confetti";
import { useTranslation } from "react-i18next";
import ChangeLanguageBtns from "../components/ChangeLanguageBtns";

function SkillGame() {
  const { t } = useTranslation();
  const { heroes, skillTries, skillStatus, isTransitioning } = useProvider();
  const [skillHeroes, setSkillHeroes] = useState();
  const [rotation, setRotation] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [renderInput, setRenderInput] = useState(true);
  const [skillClue, setSkillClue] = useState(0);
  const [skillNameHidden, setSkillNameHidden] = useState("hidden");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    if (skillStatus) {
      const { rotation } = skillStatus;
      if (rotation === 1) {
        setRotation("rotate-90");
      }
      if (rotation === 2) {
        setRotation("rotate-180");
      }
      if (rotation === 3) {
        setRotation("-rotate-90");
      }
    }
  }, [skillStatus]);

  const hiddenSkillName = () => {
    if (skillNameHidden === "hidden") {
      setSkillNameHidden("");
    } else {
      setSkillNameHidden("hidden");
    }
  };

  useEffect(() => {
    if (skillTries && heroes) {
      const filteredHeroes = heroes.filter((e) => !skillTries.includes(e.name));
      setSkillHeroes(filteredHeroes);
      setSkillClue(skillTries.length);
      if (skillTries.includes(skillStatus.todayhero)) {
        setConfetti(true);
        setBtnDisabled(false);
        setIsCorrect(true);
        setRenderInput(false);
      }
    }
  }, [skillTries, heroes]);

  useEffect(() => {
    if (skillClue && skillClue >= 5) {
      setBtnDisabled(false);
    }
  }, [skillClue]);

  if (heroes && skillTries && skillStatus && skillHeroes) {
    return (
      <div
        className={`fade-in text-white w-screen mx-auto flex flex-col items-center content-center ${
          isTransitioning ? "fade-out-btn" : "fade-in-btn"
        }`}
      >
        <ChangeLanguageBtns />
        {confetti && <Confetti />}
        <Header type="skill" />
        <div className="2xl:w-1/5 xl:w-3/12 lg:w-4/12 md:w-5/12 sm:w-5/12 mt-5 bg-gray-800 pb-5 flex w-10/12 border-sky-900 flex-col items-center rounded-xl border-2">
          <div className="">
            <h2 className="text-white text-2xl text-center mt-3">
              {t("Which hero is this skill from?")}
            </h2>
            <img
              className={`${
                skillTries.includes(skillStatus.todayhero)
                  ? "animate-img"
                  : `grayscale ${rotation}`
              } border-2 border-white rounded-md w-4/12 select-none pointer-events-none mx-auto my-5`}
              src={skillStatus.skillimg}
            />
          </div>
          <div>
            {skillClue >= 1 && (
              <div className="flex flex-col fade-in items-center">
                <button
                  disabled={btnDisabled}
                  className={`text-white  w-3/12 mx-auto border p-2 border-slate-500 rounded-full 
                  ${
                    btnDisabled
                      ? "bg-gray-700 hover:bg-slate-500"
                      : "bg-cyan-800 hover:bg-cyan-700 audio-btn"
                  } transition duration-400`}
                  onClick={hiddenSkillName}
                >
                  <img src={staff} alt="skill" />
                </button>
                {skillClue < 5 && !isCorrect ? (
                  <h3 className="text-base fade-in">
                    {5 - skillClue} {t("Tries to Skill Name")}
                  </h3>
                ) : (
                  <p className="fade-in text-sm">{t("Name Clue")}</p>
                )}
                <p className={`fade-in mt-5 ${skillNameHidden}`}>
                  {skillStatus.skillname}
                </p>
              </div>
            )}
          </div>
          {renderInput && (
            <div className="mt-4">
              <HeroesInput
                heroes={skillHeroes}
                guessed={false}
                type="skill"
                className=""
              />
            </div>
          )}
        </div>
        <p className="mt-2">{`${skillStatus.count} ${t(
          "people already found out"
        )}`}</p>
        <div className="sm:w-5/12 xs:w-7/12">
          {skillTries.map((heroName) => {
            const hero = heroes.find((e) => e.name === heroName);

            if (!hero) return null;
            if (heroName === skillStatus.todayhero)
              return <TryCard key={heroName} correctHero={true} hero={hero} />;
            else
              return <TryCard key={heroName} correctHero={false} hero={hero} />;
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

export default SkillGame;
