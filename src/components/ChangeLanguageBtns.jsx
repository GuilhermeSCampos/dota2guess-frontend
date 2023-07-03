import { BiLeftArrowAlt } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n/index';
import { useProvider } from "../context/Provider"

const ChangeLanguageBtns = ({ type }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { isTransitioning, setIsTransitioning } = useProvider();

  const changeLanguage = (lang) => {
    setIsTransitioning(true);
    setTimeout(() => {
      i18n.changeLanguage(lang);
      setIsTransitioning(false);
    }, 500); // Tempo de espera para a transição suave (em milissegundos)
  };

  const backButtonClass = type === 'home' ? 'back-button hidden' : 'back-button fade-in-btn';
  const languageButtonsClass = isTransitioning ? 'language-buttons fade-out-btn' : 'language-buttons fade-in-btn';

  return (
    <div className={`w-screen flex ${type === "home" ? "justify-end" : "justify-between"} text-white mt-2 items-center`}>
      <button className={backButtonClass}>
        <BiLeftArrowAlt size={50} onClick={() => navigate('/')} />
      </button>
      <div className={`mr-4 ${languageButtonsClass}`}>
        <button className="text-lg mx-2" onClick={() => changeLanguage('pt-BR')}>
          {t('PT')}
        </button>
        <button className="text-lg mx-2" onClick={() => changeLanguage('en-us')}>
          {t('EN')}
        </button>
      </div>
    </div>
  );
};

export default ChangeLanguageBtns;
