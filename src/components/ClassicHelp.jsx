import { MoveDown, MoveUp } from "lucide-react";
import ClassicCard from "./ClassicCard";
import { useProvider } from "../context/Provider";

function ClassicHelp() {
  const { heroes } = useProvider();
  
  return (
    <div>
      <h1 className="text-5xl">Classic Game</h1>
      <hr></hr>
      <div>
        <p className="my-1 text-lg">
          Get started by choosing any hero and it will show its properties.
        </p>
        <p className="my-1 text-lg">
          Guide yourself by the colors and the arrows that will show up.
        </p>
        <p className="my-1 text-lg">
          <span className="text-[#43A047]">Green</span> indicates a correct
          property
        </p>
        <p className="my-1 text-lg">
          <span className="text-[#E53935]">Red</span> indicates a wrong property
        </p>
        <div className="flex text-lg">
          <MoveDown size={20} /> <MoveUp size={20} />
          <p>
            These arrows will indicate if the correct answer is below or above
            your guess
          </p>
        </div>
        <h1 className="text-2xl mt-5">Example:</h1>
        <p>Consider the correct answer is Oracle</p>
        <p>If you enter Gyrocopter, this will apear:</p>
        <div className="w-screen flex justify-start my-5">
          <ClassicCard
            correctHero={heroes.find((e) => e.name === "Oracle")}
            selectedHero={heroes.find((e) => e.name === "Gyrocopter")}
          />
        </div>
        <div className="text-xl mt-10">
          <h2>
            Primary Attribute: <span className="text-[#E53935]">Red</span>
          </h2>
          <p className="text-lg">
            Its not a match since Oracle is Intelligence
          </p>
        </div>
        <div className="text-xl mt-10">
          <h2>
            Gender: <span className="text-[#43A047]">Green</span>
          </h2>
          <p className="text-lg">Oracle is Male, so its an exact match!</p>
        </div>
        <div className="text-xl mt-10">
          <h2>
            Attack Type: <span className="text-[#43A047]">Green</span>
          </h2>
          <p className="text-lg">Oracle is Ranged, so its an exact match!</p>
        </div>
        <div className="text-xl mt-10">
          <h2>
            Base Attack: <span className="text-[#E53935]">Red</span>
          </h2>
          <p className="text-lg">
            Oracle's basic attack is lower than Gyrocopter's!
          </p>
        </div>
        <div className="text-xl mt-10">
          <h2>
            Base Armor: <span className="text-[#E53935]">Red</span>
          </h2>
          <p className="text-lg">
            Oracle's basic armor is lower than Gyrocopter's!
          </p>
        </div>
        <div className="text-xl mt-10">
          <h2>
            Base HP: <span className="text-[#E53935]">Red</span>
          </h2>
          <p className="text-lg">
            Oracle's base HP is lower than Gyrocopter's!
          </p>
        </div>
        <div className="text-xl mt-10">
          <h2>
            Base MP: <span className="text-[#E53935]">Red</span>
          </h2>
          <p className="text-lg">
            Oracle's base MP is lower than Gyrocopter's!
          </p>
        </div>
        <div className="text-xl mt-10">
          <h2>
            Move Speed: <span className="text-[#E53935]">Red</span>
          </h2>
          <p className="text-lg">
            Oracle's base move speed is lower than Gyrocopter's!
          </p>
        </div>
        <p className="text-xl mt-5">
          Then, if you guess it correctly, this will appear:
        </p>
        <div className="w-screen flex justify-start my-5">
          <ClassicCard
            correctHero={heroes.find((e) => e.name === "Oracle")}
            selectedHero={heroes.find((e) => e.name === "Oracle")}
          />
        </div>
        <p>{`:)`}</p>
      </div>
    </div>
  );
}

export default ClassicHelp;
