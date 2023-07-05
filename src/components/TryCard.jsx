import PropTypes from "prop-types";

function TryCard({ correctHero, hero }) {
  return (
    <div
      className={`2xl:w-2/5 xl:w-7/12 lg:w-8/12 md:w-10/12 sm:w-11/12 xs:w-full justify-center  flex flex-col mx-auto items-center max-h-28 
      rounded-xl border-zinc-50 pt-2 transition duration-300 mt-2 ${
        correctHero
          ? "bg-green-600 hover:bg-green-500/90 correct-answer border-2"
          : "bg-red-600 hover:bg-red-500 border wrong-answer"
      }`}
    >
      <img
        className="w-3/12 border-solid border-2 rounded border-black"
        src={hero.img}
      />
      <span className="text-xl">{hero.name}</span>
    </div>
  );
}

TryCard.propTypes = {
  hero: PropTypes.shape().isRequired,
  correctHero: PropTypes.bool.isRequired,
};

export default TryCard;
