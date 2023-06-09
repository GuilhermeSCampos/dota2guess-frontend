import { useState } from "react";
import PropTypes from "prop-types";
import { useProvider } from "../context/Provider";
import { GiBroadDagger } from "react-icons/gi";
import { useTranslation } from "react-i18next";

const SUM_QUOTE_COUNT_URL =
  "https://dota2guess-backend.vercel.app/status/quotecount";

const SUM_SKILL_COUNT_URL =
  "https://dota2guess-backend.vercel.app/status/skillcount";

const SUM_CLASSIC_COUNT_URL =
  "https://dota2guess-backend.vercel.app/status/classiccount";

export default function HeroesInput({ heroes, type }) {
  const { t } = useTranslation();
  const [value, setValue] = useState("");
  const [renderList, setRenderList] = useState(false);
  const {
    submitQuoteHero,
    quoteStatus,
    setQuoteStatus,
    submitSkillHero,
    skillStatus,
    setSkillStatus,
    submitClassicHero,
    classicStatus,
    setClassicStatus
  } = useProvider();

  const onChange = ({ target }) => {
    const { value } = target;
    setValue(value);
    if (
      heroes.some((e) =>
        e.name.toLowerCase().startsWith(value.toLowerCase())
      ) &&
      value !== ""
    ) {
      setRenderList(true);
    } else {
      setRenderList(false);
    }
  };

  const onClick1 = ({ target }) => {
    if (target.localName === "img") {
      setValue(target.name);
    } else {
      setValue(target.innerText);
    }
    setRenderList(false);
  };

  const submitChampion = async (heroName) => {
    const hero = heroes.find(
      (e) => e.name.toLowerCase() === heroName.toLowerCase()
    ).name;

    if (type === "quote") {
      submitQuoteHero(hero);
      if (value === quoteStatus.todayhero) {
        await fetch(SUM_QUOTE_COUNT_URL, { method: "PUT" });
        const newStatus = { ...quoteStatus };
        setQuoteStatus({ ...newStatus, count: newStatus.count + 1 });
      }
    }

    if (type === "skill") {
      submitSkillHero(hero);
      if (value === skillStatus.todayhero) {
        await fetch(SUM_SKILL_COUNT_URL, { method: "PUT" });
        const newStatus = { ...skillStatus };
        setSkillStatus({ ...newStatus, count: newStatus.count + 1 });
      }
    }

    if (type === "classic") {
      submitClassicHero(hero);
      if (value === classicStatus.todayhero) {
        await fetch(SUM_CLASSIC_COUNT_URL, { method: "PUT" });
        const newStatus = { ...classicStatus };
        setClassicStatus({ ...newStatus, count: newStatus.count + 1 });
      }
    }

    return setValue("");
  };

  return (
    <div className="flex flex-col pt-2">
      <div className="flex flex-row ">
        <input
          type="text"
          id="default-input"
          value={value}
          onChange={onChange}
          placeholder={t("Type a hero name")}
          onFocus={({ target }) =>
            heroes.some((e) =>
              e.name.toLowerCase().startsWith(target.value.toLowerCase())
            ) && target.value !== ""
              ? setRenderList(true)
              : setRenderList(false)
          }
          className={`z-50 bg-gray-700 border border-gray-400
               text-gray-200 text-xl rounded-lg focus:ring-blue-500
                focus:border-black-500 block mx-2 w-11/12 p-2.5
                 hover:bg-gray-600 hover:transition duration-300 delay-0`}
        />

        <button
          disabled={
            !heroes.some((e) => e.name.toLowerCase() === value.toLowerCase())
          }
          onClick={() => submitChampion(value)}
          type="button"
          className="z-50 text-white bg-gray-700 w-2/12 hover:bg-gray-500 hover:transition duration-300 delay-0 focus:ring-4 focus:outline-none
           focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex 
           items-center mr-2"
        >
          <div className="mx-auto">
            <GiBroadDagger size={22} />
          </div>

          <span className="sr-only">Icon description</span>
        </button>
      </div>

      {renderList && (
        <div className="flex w-1/2 ">
          <div className="2xl:w-2/12 xl:w-1/5 lg:w-1/5 md:w-3/12 sm:w-4/12 xs:w-7/12  w-8/12 z-50 absolute ml-2  max-h-72 scrollbar scrollbar-thumb-rose-800 scrollbar-track-rose-950 overflow-auto">
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
                    className="dropdown-row z-50 flex row gap-2 rounded p-2 bg-gray-700 transition ease-in-out delay-[40ms] hover:bg-gray-500"
                    key={val.name}
                    name={val.name}
                  >
                    <img
                      className="w-14 border-solid border-2 border-black"
                      src={val.img}
                      alt={val.name}
                      name={val.name}
                    />
                    <p name={val.name} className="text-neutral-50 pt-1">
                      {val.name}
                    </p>
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
