import PropTypes from "prop-types";
import "../index.css";

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

  const selectedSplitedAttack = baseAttack2.split("-")
  const selectedAttackSum = Number(selectedSplitedAttack[0]) + Number(selectedSplitedAttack[1])
  const correctSplitedAttack = baseAttack1.split("-")
  const correctAttackSum = Number(correctSplitedAttack[0]) + Number(correctSplitedAttack[1])

  return (
    <div className="flex items-center justify-beetween w-2/4 mx-auto my-2">
      <img src={img} className="w-32 border-y border-x py-px mr-1" />
      <div
        className={`w-24 border-y border-x classic-card text-center mr-1 ${
          primaryAttr1 !== primaryAttr2 ? "bg-red-500" : "bg-green-500"
        }`}
      >
        {primaryAttr2}
      </div>
      <div
        className={`w-24 border-y border-x classic-card text-center mr-1 ${
          gender1 !== gender2 ? "bg-red-500" : "bg-green-500"
        }`}
      >
        {gender2}
      </div>
      <div
        className={`w-24 border-y border-x classic-card text-center mr-1 ${
          attackType1 !== attackType2 ? "bg-red-500" : "bg-green-500"
        }`}
      >
        {attackType2}
      </div>
      <div
        className={`w-24 border-y border-x classic-card text-center mr-1 ${
          baseAttack1  === baseAttack2 ? "bg-red-500" : "bg-green-500"
        }`}
      >
        {baseAttack2}
      </div>
      <div
        className={`w-24 border-y border-x classic-card text-center mr-1 ${
          baseDefense1 !== baseDefense2 ? "bg-red-500" : "bg-green-500"
        }`}
      >
        {baseDefense2}
      </div>
      <div
        className={`w-24 border-y border-x classic-card text-center mr-1 ${
          baseHp1 !== baseHp2 ? "bg-red-500" : "bg-green-500"
        }`}
      >
        {baseHp2}
      </div>
      <div
        className={`w-24 border-y border-x classic-card text-center mr-1 ${
          baseMp1 !== baseMp2 ? "bg-red-500" : "bg-green-500"
        }`}
      >
        {baseMp2}
      </div>
      <div
        className={`w-24 border-y border-x classic-card text-center mr-1 ${
          moveSpeed1 !== moveSpeed2 ? "bg-red-500" : "bg-green-500"
        }`}
      >
        {moveSpeed2}
      </div>
    </div>
  );
}

ClassicCard.propTypes = {
  correctHero: PropTypes.shape().isRequired,
  selectedHero: PropTypes.shape().isRequired,
};

export default ClassicCard;
