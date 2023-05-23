import { useState } from "react";
import PropTypes from "prop-types";
import { useProvider } from "../context/Provider";

export default function HeroesInput({ heroes, type }) {
  const [value, setValue] = useState("");
  const [renderList, setRenderList] = useState(false);
  const { submitQuoteHero } = useProvider();

  const onChange = (event) => {
    setValue(event.target.value);
    setRenderList(true);
  };

  const onClick1 = (event) => {
    setValue(event.target.innerText);
    setRenderList(false);
  };

  const submitChampion = (hero) => {
    if (type === "quote") {
      submitQuoteHero(hero);
    }
    setValue("");
  };

  return (
    <div className="App">
      <div className="search-container">
        <input
          type="text"
          id="default-input"
          value={value}
          onChange={onChange}
          className="w-60 bg-gray-700 border border-gray-400 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      {renderList && (
        <div className="dropdown w-64 max-h-56 scrollbar-thin scrollbar-thumb-rose-800 scrollbar-track-rose-950 overflow-auto">
          {heroes
            .filter((val) => {
              if (value == "") {
                return null;
              } else if (
                val.name.toLowerCase().startsWith(value.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val) => {
              return (
                <div
                  onClick={onClick1}
                  className="dropdown-row flex row gap-2 p-2 bg-gray-700 transition ease-in-out delay-[10ms] hover:bg-gray-500"
                  key={val.name}
                >
                  <img
                    className="w-14 border-solid border-2 border-black"
                    src={val.img}
                    alt={val.name}
                  />
                  <p className="text-neutral-50 pt-1">{val.name}</p>
                </div>
              );
            })}
        </div>
      )}
      <button onClick={ () => submitChampion(value)}>Enviar</button>
    </div>
  );
}

HeroesInput.propTypes = {
  heroes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  type: PropTypes.string.isRequired,
};
