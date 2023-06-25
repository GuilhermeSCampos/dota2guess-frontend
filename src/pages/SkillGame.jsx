import { useEffect, useState } from "react";
import HeroesInput from "../components/HeroesInput";
import { useProvider } from "../context/Provider";
import ReactLoading from "react-loading";
import TryCard from "../components/TryCard";
import Header from "../components/Header";
import staff from "../assets/staff.png";

function SkillGame() {
  const { heroes, skillTries, skillStatus } = useProvider();
  const [skillHeroes, setSkillHeroes] = useState();
  const [rotation, setRotation] = useState("");
  const [renderInput, setRenderInput] = useState(true);
  const [skillClue, setSkillClue] = useState(0);
  const [skillNameHidden, setSkillNameHidden] = useState("hidden");

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
        setRenderInput(false);
      }
    }
  }, [skillTries, heroes]);

  if (heroes && skillTries && skillStatus && skillHeroes) {
    return (
      <div className="fade-in text-white flex flex-col justify-around lg:mt-16 items-center w-11/12 mx-auto">
        <Header />
        <div className=" w-1/5 mt-5 bg-gray-800 pb-5 flex border-sky-900 flex-col items-center rounded-xl border-2">
          <div className="">
            <h2 className="text-white text-2xl mt-3">
              Which hero is this skill from?
            </h2>
            <img
              className={`grayscale ${rotation} border-2 border-white rounded-md w-4/12 select-none pointer-events-none mx-auto my-5`}
              src={skillStatus.skillimg}
            />
          </div>
          <div>
            {skillClue >= 1 && (
              <div className="flex flex-col fade-in items-center">
                <button
                  disabled={skillClue < 5}
                  className={`text-white  w-3/12 mx-auto border p-2 border-slate-500 rounded-full 
                  ${
                    skillClue < 5
                      ? "bg-gray-700 hover:bg-slate-500"
                      : "bg-cyan-800 hover:bg-cyan-600"
                  } transition duration-400`}
                  onClick={hiddenSkillName}
                >
                  <img src={staff} alt="skill" />
                </button>
                {skillClue < 5 ? (
                  <h3 className="text-base fade-in">
                    Skill Name in {5 - skillClue} tries
                  </h3>
                ) : (
                  <p className="fade-in text-sm">Name Clue</p>
                )}
                <p className={`fade-in mt-5 ${skillNameHidden}`}>
                  {skillStatus.skillname}
                </p>
              </div>
            )}
          </div>
          {renderInput && (
            <HeroesInput heroes={skillHeroes} guessed={false} type="skill" />
          )}
        </div>
        <div className="text-white">
          <p>{`${skillStatus.count} people already found out`}</p>
        </div>
        <div className="w-5/12 ">
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
    <ReactLoading
      type={"spinningBubbles"}
      color={"white"}
      height={100}
      width={100}
    />
  );
}

export default SkillGame;
