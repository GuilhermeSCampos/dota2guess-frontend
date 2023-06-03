import { useEffect, useState } from "react";
import HeroesInput from "../components/HeroesInput";
import { useProvider } from "../context/Provider";
import ReactLoading from "react-loading";
import ClassicCard from "../components/ClassicCard";

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
        <div className="w-screen border-2 ">
          <div className="flex justify-center w-2/4 mx-auto">
            <h3 className="mr-16 ml-16">Hero</h3>
            <h3 className="mr-12 ">Attribute</h3>
            <h3 className="mr-20">Gender</h3>
            <h3 className="mr-12">Attack Type</h3>
            <h3 className="mr-12">Base Attack</h3>
            <h3 className="mr-12">Base Armor</h3>
            <h3 className="mr-12">Base Hp</h3>
            <h3 className="mr-12">Base Mp</h3>
            <h3 className="mr-36">Movespeed</h3>
          </div>
          {classicTries.map((e) => {
            return (  
              <ClassicCard
                key={e.name}
                selectedHero={heroes.find((e2) => e2.name === e)}
                correctHero={heroes.find((e2) => e2.name === classicStatus.todayhero)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ClassicGame;
