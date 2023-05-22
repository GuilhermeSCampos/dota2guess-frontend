import logo from '../assets/logoTeste.png';
import { useNavigate } from 'react-router-dom';

const gameOptions = ['Classic', 'Quote', 'Skill'];

function Home() {
  
  const navigate = useNavigate()

  return (
    <div className='flex flex-col justify-center items-center w-full h-screen'>
      {/* Div principal que abarca todo o conteúdo da home! */}
      <div className='flex flex-col justify-center items-center w-[23rem] border h-3/4 shadow-xl xl:w-1/4 shadow-black rounded-md bg-[#DDD7F7]'>
      <div className='mb-20'>
        {/* Div que contém o logo */}
        <img
          src={logo}
          alt='logo'
          className='w-36 mt-10 hover:w-40 transition-all ease-in-out delay-75'
        />
        {/* Logo com tamanho escalonado, com transição de 0.75s e margem de 10px no topo */}
      </div>
      <div>
        {/* Div que contém os botões e opções de game */}
        {gameOptions.map((gameOption, i) => (
          <div key={ i } className='py-2 text-center'>
            <button className='bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md w-40' onClick={() => navigate(`/${gameOption.toLowerCase()}`)}>
              {gameOption}
            </button>
          </div>
        ))}

      </div>
      </div>
    </div>
  );
}

export default Home;
