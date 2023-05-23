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
    <div className="flex flex-col pt-4 gap-2 relative">
    <div className="flex flex-row pt-4 gap-2">
      <div className="search-container">
        <input
          type="text"
          id="default-input"
          value={value}
          onChange={onChange}
          className="w-60 bg-gray-700 border border-gray-400 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>

      <button disabled={!heroes.find((e) => e.name === value)}
        onClick={() => submitChampion(value)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
  <span className="sr-only">Icon description</span>
</button>
    </div>

{renderList && (
  <div className="absolute pt-16 mr-10 flex items-center justify-center z-50"> 
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
  </div>
)}

</div>
  );
}

HeroesInput.propTypes = {
  heroes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  type: PropTypes.string.isRequired,
  guessed: PropTypes.bool.isRequired,
};
