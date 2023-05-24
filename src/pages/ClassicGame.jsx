import HeroesInput from "../components/HeroesInput"
import { useProvider } from "../context/Provider"

function ClassicGame() {

  const { heroes } = useProvider();

  return (
    <div className="text-white">ClassicGame
    <HeroesInput heroes={heroes} type="classic"/>
    </div>
  )
}

export default ClassicGame