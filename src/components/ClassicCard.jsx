import PropTypes from "prop-types";
import "../index.css";

import { MoveDown, MoveUp } from "lucide-react";

function ClassicCard({ correctHero, selectedHero }) {
  const {
    primaryAttr: primaryAttr1,
    gender: gender1,
    // baseAttack: baseAttack1,
    attackType: attackType1,
    baseHp: baseHp1,
    baseMp: baseMp1,
    baseDefense: baseDefense1,
    moveSpeed: moveSpeed1,
  } = correctHero;

  const {
    primaryAttr: primaryAttr2,
    gender: gender2,
    // baseAttack: baseAttack2,
    attackType: attackType2,
    baseHp: baseHp2,
    baseMp: baseMp2,
    baseDefense: baseDefense2,
    moveSpeed: moveSpeed2,
    img,
  } = selectedHero;

  // const selectedSplitedAttack = baseAttack2.split("-")
  // const selectedAttackSum = Number(selectedSplitedAttack[0]) + Number(selectedSplitedAttack[1])
  // const correctSplitedAttack = baseAttack1.split("-")
  // const correctAttackSum = Number(correctSplitedAttack[0]) + Number(correctSplitedAttack[1])

  const compareAttr = (correctAttr, selectedAttr) => {
    if (correctAttr > selectedAttr) {
      return <MoveUp strokeWidth={2.5} />;
    }
    if (correctAttr < selectedAttr) {
      return <MoveDown strokeWidth={2.5} />;
    }
  };

  return (
    <div className="flex items-center justify-center w-3/4 mx-auto my-2">
      <img src={img} className="w-1/12 border mx-2 rounded-xl " />
      <div
        className={`w-1/12 border mx-2 justify-center flex py-5 rounded-xl text-lg ${
          primaryAttr1 !== primaryAttr2 ? "bg-red-500" : "bg-[#00ff40a3]"
        }`}
      >
        {primaryAttr2}
      </div>
      <div
        className={`w-1/12 border mx-2 justify-center flex py-5 rounded-xl text-lg ${
          gender1 !== gender2 ? "bg-red-500" : "bg-[#00ff40a3]"
        }`}
      >
        {gender2}
      </div>
      <div
        className={`w-1/12 border mx-2 justify-center flex py-5 rounded-xl text-lg ${
          attackType1 !== attackType2 ? "bg-red-500" : "bg-[#00ff40a3]"
        }`}
      >
        {attackType2}
      </div>
      <div
        className={`w-1/12 border mx-2 flex justify-center py-5 rounded-xl text-lg ${
          Number(baseDefense1) !== Number(baseDefense2)
            ? "bg-red-500"
            : "bg-[#00ff40a3]"
        }`}
      >
        {baseDefense2}
        {compareAttr(Number(baseDefense1), Number(baseDefense2))}
      </div>
      <div
        className={`w-1/12 border mx-2 flex justify-center py-5 rounded-xl text-lg ${
          baseHp1 !== baseHp2 ? "bg-red-500" : "bg-[#00ff40a3]"
        }`}
      >
        {baseHp2}
        {compareAttr(Number(baseHp1), Number(baseHp2))}
      </div>
      <div
        className={`w-1/12 border mx-2 flex justify-center py-5 rounded-xl text-lg ${
          baseMp1 !== baseMp2 ? "bg-red-500" : "bg-[#00ff40a3]"
        }`}
      >
        {baseMp2}
        {compareAttr(Number(baseMp1), Number(baseMp2))}
      </div>
      <div
        className={`w-1/12 border-x border-y mx-2 flex justify-center py-5 rounded-xl text-lg ${
          moveSpeed1 !== moveSpeed2 ? "bg-red-500" : "bg-[#00ff40a3]"
        }`}
      >
        {moveSpeed2}
        {compareAttr(Number(moveSpeed1), Number(moveSpeed2))}
      </div>
    </div>
  );
}

ClassicCard.propTypes = {
  correctHero: PropTypes.shape().isRequired,
  selectedHero: PropTypes.shape().isRequired,
};

export default ClassicCard;
