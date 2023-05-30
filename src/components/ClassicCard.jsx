import PropTypes from "prop-types";

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
  } = selectedHero;

  return <div></div>;
}

ClassicCard.propTypes = {
  correctHero: PropTypes.shape().isRequired,
  selectedHero: PropTypes.shape().isRequired,
};

export default ClassicCard;
