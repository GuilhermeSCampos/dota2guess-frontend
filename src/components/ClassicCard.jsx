import PropTypes from "prop-types";
import "../index.css";

import { MoveDown, MoveUp } from "lucide-react";

function ClassicCard({ correctHero, selectedHero }) {
  const {
    primaryAttr: primaryAttr1,
    gender: gender1,
    baseAttack: baseAttack1,
    attackType: attackType1,
    baseHp: baseHp1,
    baseMp: baseMp1,
    baseDefense: baseDefense1,
    moveSpeed: moveSpeed1,
  } = correctHero;

  const {
    primaryAttr: primaryAttr2,
    gender: gender2,
    baseAttack: baseAttack2,
    attackType: attackType2,
    baseHp: baseHp2,
    baseMp: baseMp2,
    baseDefense: baseDefense2,
    moveSpeed: moveSpeed2,
    img,
  } = selectedHero;

  const selectedSplitedAttack = baseAttack2.split("-");
  const selectedAttackSum =
    Number(selectedSplitedAttack[0]) + Number(selectedSplitedAttack[1]);
  const correctSplitedAttack = baseAttack1.split("-");
  const correctAttackSum =
    Number(correctSplitedAttack[0]) + Number(correctSplitedAttack[1]);

  const compareAttr = (correctAttr, selectedAttr) => {
    if (correctAttr > selectedAttr) {
      return <MoveUp strokeWidth={2} size={20} />;
    }
    if (correctAttr < selectedAttr) {
      return <MoveDown strokeWidth={2} size={20} />;
    }
  };

  return (
    <div className="flex items-center text-xm justify-center w-7/12 mx-auto my-2">
      <img src={img} className={`w-1/12 border mx-1 rounded-xl h-2/12 `} />
      <div
        className={`w-1/12 border mx-1 items-center justify-center flex py-3 rounded-xl ${
          primaryAttr1 !== primaryAttr2 ? "bg-[#e32626a3]" : "bg-[#24ad46ce]"
        }`}
      >
        {primaryAttr2}
      </div>
      <div
        className={`w-1/12 border mx-1 justify-center flex py-3 rounded-xl ${
          gender1 !== gender2 ? "bg-[#e32626a3]" : "bg-[#24ad46ce]"
        }`}
      >
        {gender2}
      </div>
      <div
        className={`w-1/12 border mx-1 justify-center flex py-3 rounded-xl ${
          attackType1 !== attackType2 ? "bg-[#e32626a3]" : "bg-[#24ad46ce]"
        }`}
      >
        {attackType2}
      </div>
      <div
        className={`w-1/12 border mx-1 flex justify-center py-3 rounded-xl ${
          baseAttack1 !== baseAttack2 ? "bg-[#e32626a3]" : "bg-[#24ad46ce]"
        }`}
      >
        {baseAttack2}
        {compareAttr(Number(correctAttackSum), Number(selectedAttackSum))}
      </div>
      <div
        className={`w-1/12 border mx-1 flex justify-center py-3 rounded-xl ${
          Number(baseDefense1) !== Number(baseDefense2)
            ? "bg-[#e32626a3]"
            : "bg-[#24ad46ce]"
        }`}
      >
        {baseDefense2}
        {compareAttr(Number(baseDefense1), Number(baseDefense2))}
      </div>
      <div
        className={`w-1/12 border mx-1 flex justify-center py-3 rounded-xl ${
          baseHp1 !== baseHp2 ? "bg-[#e32626a3]" : "bg-[#24ad46ce]"
        }`}
      >
        {baseHp2}
        {compareAttr(Number(baseHp1), Number(baseHp2))}
      </div>
      <div
        className={`w-1/12 border mx-1 flex justify-center py-3 rounded-xl ${
          baseMp1 !== baseMp2 ? "bg-[#e32626a3]" : "bg-[#24ad46ce]"
        }`}
      >
        {baseMp2}
        {compareAttr(Number(baseMp1), Number(baseMp2))}
      </div>
      <div
        className={`w-1/12 border-x border-y mx-1 flex justify-center py-3 rounded-xl ${
          moveSpeed1 !== moveSpeed2 ? "bg-[#e32626a3]" : "bg-[#24ad46ce]"
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
