import { useEffect, useState } from "react";
import HeroesInput from "../components/HeroesInput";
import { useProvider } from "../context/Provider";
import ReactLoading from "react-loading";
import TryCard from "../components/TryCard";

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
      <div>
        <div>
          <div>
            <h2 className="text-white">which hero is this skill from</h2>
            <img
              className={`grayscale ${rotation} select-none pointer-events-none`}
              src={skillStatus.skillimg}
            />
          </div>
          <div>
            {renderInput && skillClue < 5 && skillClue >= 1 && (
              <div>
                <h3>Skill Name in {5 - skillClue} tries</h3>
              </div>
            )}
            <button
              disabled={skillClue < 5}
              className="text-white bg-black"
              onClick={hiddenSkillName}
            >
              Click to see skill Name
            </button>
            {skillClue >= 5 && (
              <div className="text-white">
                <h2 className={`${skillNameHidden}`}>
                  {skillStatus.skillname}
                </h2>
              </div>
            )}
          </div>
          {renderInput && (
            <HeroesInput heroes={skillHeroes} guessed={false} type="skill" />
          )}
        </div>
        <div>
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
