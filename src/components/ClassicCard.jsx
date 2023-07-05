import PropTypes from "prop-types";
import "../index.css";
import { useTranslation } from "react-i18next";

import { MoveDown, MoveUp } from "lucide-react";

function ClassicCard({ correctHero, selectedHero, justify }) {

  const { t } = useTranslation();
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
    <div className={`flex items-center text-xm gap-2 ${justify} lg:w-8/12 w-[50rem] my-2`}>
      <img src={img} className={`lg:w-1/12 w-[100px] border rounded-xl h-2/12 `} />
      <div
        className={`lg:w-1/12 w-[100px] border - items-center text-center justify-center flex py-4 rounded-xl transition duration-300 ease-in-out ${
          primaryAttr1 !== primaryAttr2 ? "bg-[#e32626a3] hover:bg-[#ff5050a3]" : "bg-[#24ad46ce] hover:bg-[#49bb66ce]"
        }`}
      >
        {t(primaryAttr2)}
      </div>
      <div
        className={`lg:w-1/12 w-[100px] border - justify-center text-center flex py-4 rounded-xl transition duration-300 ease-in-out ${
          gender1 !== gender2 ? "bg-[#e32626a3] hover:bg-[#ff5050a3]" : "bg-[#24ad46ce] hover:bg-[#49bb66ce]"
        }`}
      >
        {t(gender2)}
      </div>
      <div
        className={`lg:w-1/12 w-[100px] border - justify-center text-center flex flex-nowrap whitespace-nowrap items-center py-7 rounded-xl max-h-12 transition duration-300 ease-in-out ${
          attackType1 !== attackType2 ? "bg-[#e32626a3] hover:bg-[#ff5050a3]" : "bg-[#24ad46ce] hover:bg-[#49bb66ce]"
        }`}
      >
        {t(attackType2)}
      </div>
      <div
        className={`lg:w-1/12 w-[100px] border - flex justify-center text-center py-4 rounded-xl transition duration-300 ease-in-out ${
          baseAttack1 !== baseAttack2 ? "bg-[#e32626a3] hover:bg-[#ff5050a3]" : "bg-[#24ad46ce] hover:bg-[#49bb66ce]"
        }`}
      >
        {baseAttack2}
        {compareAttr(Number(correctAttackSum), Number(selectedAttackSum))}
      </div>
      <div
        className={`lg:w-1/12 w-[100px] border - flex justify-center text-center py-4 rounded-xl transition duration-300 ease-in-out ${
          Number(baseDefense1) !== Number(baseDefense2)
            ? "bg-[#e32626a3] hover:bg-[#ff5050a3]"
            : "bg-[#24ad46ce]"
        }`}
      >
        {baseDefense2}
        {compareAttr(Number(baseDefense1), Number(baseDefense2))}
      </div>
      <div
        className={`lg:w-1/12 w-[100px] border - flex justify-center text-center py-4 rounded-xl transition duration-300 ease-in-out ${
          baseHp1 !== baseHp2 ? "bg-[#e32626a3] hover:bg-[#ff5050a3]" : "bg-[#24ad46ce] hover:bg-[#49bb66ce]"
        }`}
      >
        {baseHp2}
        {compareAttr(Number(baseHp1), Number(baseHp2))}
      </div>
      <div
        className={`lg:w-1/12 w-[100px] border - flex justify-center text-center py-4 rounded-xl transition duration-300 ease-in-out ${
          baseMp1 !== baseMp2 ? "bg-[#e32626a3] hover:bg-[#ff5050a3]" : "bg-[#24ad46ce] hover:bg-[#49bb66ce]"
        }`}
      >
        {baseMp2}
        {compareAttr(Number(baseMp1), Number(baseMp2))}
      </div>
      <div
        className={`lg:w-1/12 w-[100px] border-x border-y - flex text-center justify-center py-4 rounded-xl transition duration-300 ease-in-out ${
          moveSpeed1 !== moveSpeed2 ? "bg-[#e32626a3] hover:bg-[#ff5050a3]" : "bg-[#24ad46ce] hover:bg-[#49bb66ce]"
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
