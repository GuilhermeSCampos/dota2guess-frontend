import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useTranslation } from "react-i18next";
import ChangeLanguageBtns from "../components/ChangeLanguageBtns";
import { useProvider } from "../context/Provider";

const gameOptions = ["Classic", "Quote", "Skill"];

function Home() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { isTransitioning } = useProvider();

  return (
    <div
      className={`teste fade-in flex  flex-col text-center w-screen h-screen ${
        isTransitioning ? "fade-out-btn" : "fade-in-btn"
      }`}
    >
      <ChangeLanguageBtns type="home" />
      <Header type="home" />
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
      <div className="flex flex-col items-center w-11/12 h-fit mx-auto mt-1">
        {/* Div que contém os botões e opções de game */}
        {gameOptions.map((gameOption, i) => (
          <button
            key={i}
            className="2xl:w-3/12 xl:w-4/12 lg:w-5/12 md:w-6/12 sm:w-8/12 w-11/12 flex flex-col justify-between items-center hover:translate-y-1 game-card text-4xl border-2 border-teal-900 bg-gray-900/90 hover:bg-gray-800/90
             text-white py-2 px-4 rounded-md  mx-5 my-5 transition ease-in-out duration-200"
            onClick={() => navigate(`/${gameOption.toLowerCase()}`)}
          >
            {t(gameOption)}
            <div className="text-base">
              {i === 0 ? (
                <div className="flex flex-col">
                  <div className="flex justify-center items-center my-6">
                    <img
                      src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_damage.png"
                      className="w-1/12 mx-5"
                    />
                    <img
                      src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_armor.png "
                      className="w-1/12 mx-5"
                    />
                    <img
                      src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_movement_speed.png"
                      className="w-1/12 mx-5"
                    />
                  </div>
                  <p>
                    {t("Guess the hero by its attributes and general info.")}
                  </p>
                </div>
              ) : i === 1 ? (
                <div className="flex flex-col justify-center">
                  <p className="text-2xl ">“I rise against the tide”</p>
                  <img
                    src="https://images.emojiterra.com/google/android-10/512px/1f914.png"
                    className="w-12 mx-auto mb-3"
                  />
                  <p>{t("Guess the hero by its quote.")}</p>
                </div>
              ) : (
                <div>
                  <img
                    src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/abaddon_death_coil.png"
                    className="w-3/12 mb-5 mx-auto grayscale-image my-5"
                  />
                  <p>{t("Guess the hero by its skill.")}</p>
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
