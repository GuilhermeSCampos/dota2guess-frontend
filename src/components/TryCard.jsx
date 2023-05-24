import PropTypes from "prop-types";

function TryCard({ correctHero, hero }) {
  return (
    <div
      className={`flex flex-col items-center border-4 border-zinc-50 pt-2 w-64 h-20 mt-2 ${
        correctHero ? "bg-green-600" : "bg-red-600"
      }`}
    >
      <img className="w-16 border-solid border-2 border-black" src={hero.img} />
      <span>{hero.name}</span>
    </div>
  );
}

TryCard.propTypes = {
  hero: PropTypes.shape().isRequired,
  correctHero: PropTypes.bool.isRequired,
};

export default TryCard;
