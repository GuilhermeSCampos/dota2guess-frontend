import { useNavigate } from "react-router-dom";
import ModalInfo from "./ModalInfo";
import ModalHelpClassic from "./ModalHelpClassic";
import ModalHelpQuote from "./ModalHelpQuote";
import ModalHelpSkill from "./ModalHelpSkill";

function Header({ type }) {
  const navigate = useNavigate();
  return (
    <div className="text-center flex flex-col mx-auto my-5 justify-center items-center">
      <button
        onClick={() => navigate("/")}
        className="text-white shadow hover:text-6xl text-5xl transion ease-in-out antialiased hover:subpixel-antialiased duration-300 title"
      >
        Dota2Guess
      </button>
      <div className="flex">
        <div className="flex flex-col items-center">
          <button className="trigger-about">
            <ModalInfo />
          </button>
          <div className="about border-2 mt-14 rounded-xl my-3 border-cyan-700 bg-gray-700 text-white px-4 py-1">
            <p>About</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <button className="trigger-about">
            {type === "classic" ? (
              <ModalHelpClassic />
            ) : type === "quote" ? (
              <ModalHelpQuote />
            ) : type === "skill" ? (
              <ModalHelpSkill />
            ) : (
              " "
            )}
          </button>
          <div className="about border-2 mt-14 rounded-xl my-3 border-cyan-700 bg-gray-700 text-white px-4 py-1">
            <p>How to Play</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
