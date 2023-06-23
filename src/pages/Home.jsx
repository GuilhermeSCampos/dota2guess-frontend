import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const gameOptions = ["Classic", "Quote", "Skill"];

function Home() {
  const navigate = useNavigate();

  return (
    <div className="teste fade-in flex flex-col text-center w-screen h-screen ">
      <Header />
      {/* Div principal que abarca todo o conteúdo da home! */}
      {/* <div className="flex"> */}
      {/* <div className="mb-20"> */}
      {/* Div que contém o logo */}
      {/* <img
        src={logo}
        alt="logo"
        className="w-36 mt-10 hover:w-40 transition-all ease-in-out delay-75"
      /> */}
      {/* Logo com tamanho escalonado, com transição de 0.75s e margem de 10px no topo */}
      {/* </div> */}
      {/* </div> */}
      <div className="flex flex-col items-center w-11/12 h-2/6 mx-auto mt-10">
        {/* Div que contém os botões e opções de game */}
        {gameOptions.map((gameOption, i) => (
          <button
            key={i}
            className="flex flex-col justify-between items-center hover:translate-y-1 game-card text-4xl bg-gray-900/90 hover:bg-gray-800/90
             text-white py-2 px-4 rounded-md w-3/12 mx-5 my-5 transition ease-in-out duration-200"
            onClick={() => navigate(`/${gameOption.toLowerCase()}`)}
          >
            {gameOption.split("").join(" ")}
            <div className="text-base">
              {i === 0 ? (
                <div className="flex flex-col">
                  <div className="flex justify-center items-center my-6">
                    <img
                      src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_damage.png"
                      className="w-2/12 mx-5"
                    />
                    <img
                      src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_armor.png "
                      className="w-2/12 mx-5"
                    />
                    <img
                      src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_movement_speed.png"
                      className="w-2/12 mx-5"
                    />
                  </div>
                  <p>Guess the hero by by his attributes and general info.</p>
                </div>
              ) : i === 1 ? (
                <div className="flex flex-col justify-center">
                  <p className="text-3xl ">“I rise against the tide”</p>
                  <img
                    src="https://images.emojiterra.com/google/android-10/512px/1f914.png"
                    className="w-16 mx-auto mb-5"
                  />
                  <p>Guess the hero by his quote.</p>
                </div>
              ) : (
                <div>
                  <img
                    src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/abaddon_death_coil.png"
                    className="w-5/12 mb-5 mx-auto grayscale-image my-5"
                  />
                  <p>Guess the hero by his skill.</p>
                </div>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Home;
