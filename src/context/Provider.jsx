import React, { useEffect, useState } from "react";
export const mainContext = React.createContext({});
import PropTypes from "prop-types";
import { createLocalStorage } from "../utils/initialLocalStorage.js";
import { getDate } from "../utils/getDate.js";

export const DotaProvider = (props) => {
  const [heroes, setHeroes] = useState([]);
  const [classicGame, setClassicGame] = useState([]);
  const [quoteGame, setQuoteGame] = useState([]);
  const [skillGame, setSkillGame] = useState([]);

  //requisição inicial para pegar herois
  const fetchHeroes = async () => {
    const response = await fetch("https://scary-foal-robe.cyclic.app/heroes");
    const data = await response.json();
    setHeroes(data);
  };

  const checkLocalStorage = () => {
    const playerData = JSON.parse(localStorage.getItem("dota2guess"));
    if (playerData) {
      const todayDate = getDate();
      const { id } = playerData;
      if (id !== todayDate) {
        playerData.id = getDate()
        playerData.games.classic.tries = [];
        playerData.games.skill.tries = [];
        playerData.games.quote.tries = [];
        localStorage.setItem("dota2guess", JSON.stringify(playerData));
      } else {
        const { classic, skill, quote } = playerData.games;
        setClassicGame(classic);
        setQuoteGame(quote);
        setSkillGame(skill);
      }
    } else {
      const newPlayerData = createLocalStorage();
      const { classic, skill, quote } = newPlayerData.games;
      setClassicGame(classic);
      setQuoteGame(quote);
      setSkillGame(skill);
      localStorage.setItem("dota2guess", JSON.stringify(newPlayerData));
    }
  };

  useEffect(() => {
    fetchHeroes();
    checkLocalStorage();
  }, []);

  return (
    <mainContext.Provider
      value={{
        heroes,
        classicGame,
        setClassicGame,
        quoteGame,
        setQuoteGame,
        skillGame,
        setSkillGame,
      }}
    >
      {props.children}
    </mainContext.Provider>
  );
};

DotaProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export const useProvider = () => React.useContext(mainContext);
