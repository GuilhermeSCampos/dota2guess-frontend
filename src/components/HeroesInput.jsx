import { data } from "../data/data";
import { useState } from "react";

export default function HeroesInput() {

  const [value, setValue] = useState("");
  const [renderList, setRenderList] = useState(false);

  const onChange = (event) => {
    setValue(event.target.value);
    setRenderList(true);
  };

  const onClick = (event) => {
    setValue(event.target.innerText);
    setRenderList(false);
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
          {data
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
                  onClick={onClick}
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
    </div>
  );
}
