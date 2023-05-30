import { useEffect, useState } from "react";
import HeroesInput from "../components/HeroesInput";
import { useProvider } from "../context/Provider";
import ReactLoading from "react-loading";

function ClassicGame() {
  const { heroes, classicTries, classicStatus } = useProvider();
  const [classicHeroes, setClassicHeroes] = useState();

  useEffect(() => {
    if (classicTries && heroes) {
      const filteredHeroes = heroes.filter(
        (e) => !classicTries.includes(e.name)
      );
      setClassicHeroes(filteredHeroes);
    }
  }, [classicTries, heroes]);

  if (heroes && classicTries && classicHeroes && classicStatus) {
    return (
      <div className="text-white flex flex-col lg:mt-56 items-center content-center">
        ClassicGame
        <HeroesInput
          heroes={classicHeroes}
          type="classic"
          guessed={classicTries.includes(classicStatus.todayhero)}
        />
        {/* <div>
    {classicTries.map((e) => {
      
    })}
  </div> */}
      </div>
    );
  }
}

export default ClassicGame;
