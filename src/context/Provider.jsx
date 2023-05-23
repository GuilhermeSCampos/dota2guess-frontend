import React, { useEffect, useState } from "react";
export const mainContext = React.createContext({});
import PropTypes from "prop-types";
import { createLocalStorage } from "../utils/initialLocalStorage.js";
import { getDate } from "../utils/getDate.js";

export const DotaProvider = (props) => {
  const [heroes, setHeroes] = useState();
  const [classicTries, setClassicTries] = useState([]);
  const [quoteTries, setQuoteTries] = useState();
  const [skillTries, setSkillTries] = useState([]);
  const [quoteStatus, setQuoteStatus] = useState([]);
  const [classicStatus, setClassicStatus] = useState([]);
  const [skillStatus, setSkillStatus] = useState([]);

  //requisição inicial para pegar herois
  const fetchData = async () => {
    const response = await fetch("https://scary-foal-robe.cyclic.app/status");
    const data = await response.json();
    setHeroes(data.heroes);
    setQuoteStatus(data.quote);
    setClassicStatus(data.classic);
    setSkillStatus(data.skill);
  };

  const checkLocalStorage = () => {
    const playerData = JSON.parse(localStorage.getItem("dota2guess"));
    if (playerData) {
      const todayDate = getDate();
      const { id } = playerData;
      if (id !== todayDate) {
        playerData.id = getDate();
        playerData.games.classic = [];
        playerData.games.skill = [];
        playerData.games.quote = [];
        localStorage.setItem("dota2guess", JSON.stringify(playerData));
      } else {
        const { classic, skill, quote } = playerData.games;
        setClassicTries(classic);
        setQuoteTries(quote);
        setSkillTries(skill);
      }
    } else {
      const newPlayerData = createLocalStorage();
      const { classic, skill, quote } = newPlayerData.games;
      setClassicTries(classic);
      setQuoteTries(quote);
      setSkillTries(skill);
      localStorage.setItem("dota2guess", JSON.stringify(newPlayerData));
    }
  };

  const submitQuoteHero = (hero) => {
    const update = [...quoteTries, hero];
    setQuoteTries(update);
    const playerData = JSON.parse(localStorage.getItem("dota2guess"));
    playerData.games.quote.push(hero);
    localStorage.setItem("dota2guess", JSON.stringify(playerData));
  };

  useEffect(() => {
    fetchData();
    checkLocalStorage();
  }, []);

  return (
    <mainContext.Provider
      value={{
        heroes,
        classicTries,
        setClassicTries,
        quoteTries,
        setQuoteTries,
        skillTries,
        setSkillTries,
        quoteStatus,
        classicStatus,
        skillStatus,
        submitQuoteHero,
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
