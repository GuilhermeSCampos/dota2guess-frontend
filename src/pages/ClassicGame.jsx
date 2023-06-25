import { useEffect, useState } from "react";
import HeroesInput from "../components/HeroesInput";
import { useProvider } from "../context/Provider";
import ReactLoading from "react-loading";
import ClassicCard from "../components/ClassicCard";
import Header from "../components/Header";

function ClassicGame() {
  const { heroes, classicTries, classicStatus } = useProvider();
  const [classicHeroes, setClassicHeroes] = useState();
  const [renderInput, setRenderInput] = useState(true);

  useEffect(() => {
    if (classicTries && heroes) {
      const filteredHeroes = heroes.filter(
        (e) => !classicTries.includes(e.name)
      );
      if (classicTries.includes(classicStatus.todayhero)) {
        setRenderInput(false);
      }
      setClassicHeroes(filteredHeroes);
    }
  }, [classicTries, heroes]);

  if (heroes && classicTries && classicHeroes && classicStatus) {
    return (
      <div className="fade-in text-white w-11/12 mx-auto flex flex-col lg:mt-16 items-center content-center">
        <Header />
        <div className=" flex flex-col text-center w-1/5">
          <h3 className="text-3xl">{`Guess Today's Hero!`}</h3>
          <div className="">
            {classicTries.length === 0 && <p>Type a hero to begin</p>}
            {renderInput && (
              <HeroesInput
                heroes={classicHeroes}
                type="classic"
                guessed={classicTries.includes(classicStatus.todayhero)}
              />
            )}
          </div>
        </div>

        <div className="w-screen mt-10">
          {classicTries.length > 0 && (
            <div className="flex items-center justify-center w-3/4 mx-auto my-2">
              <div className="w-1/12 mx-1 justify-center flex">Hero</div>
              <div className="w-1/12 mx-1 justify-center flex">
                Primary Attr
              </div>
              <div className="w-1/12 mx-1 justify-center flex">Gender</div>
              <div className="w-1/12 mx-1 justify-center flex">Attack Type</div>
              <div className="w-1/12 mx-1 justify-center flex">
                Base Defense
              </div>
              <div className="w-1/12 mx-1 justify-center flex">Base HP</div>
              <div className="w-1/12 mx-1 justify-center flex">Base MP</div>
              <div className="w-1/12 mx-1 justify-center flex">Move Speed</div>
            </div>
          )}
          {classicTries.map((e) => {
            return (
              <ClassicCard
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
    );
  }

  return (
    <div className="flex flex-col items-center w-screen h-screen justify-center">
    <ReactLoading
      type={"spinningBubbles"}
      color={"white"}
      width={150}
    />
    </div>
  );
}

export default ClassicGame;
