import { useNavigate } from "react-router-dom";

import BasicModal from "./ModalInfo";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="text-center flex flex-row-reverse ml-10 justify-center items-center">
      <nav className="">
        <button>
          <BasicModal />
        </button>
      </nav>
      <button
        onClick={() => navigate("/")}
        className="text-white shadow hover:text-6xl text-5xl transion ease-in-out antialiased hover:subpixel-antialiased duration-300 title"
      >
        Dota2Guess
      </button>
    </div>
  );
}

export default Header;
