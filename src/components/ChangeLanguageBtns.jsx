import i18n from "../i18n/index";

console.log(navigator.language)

const ChangeLanguageBtns = () => {
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="w-screen flex justify-end text-white">
      <button className="text-lg mx-2" onClick={() => changeLanguage("pt-BR")}>PT</button>
      <button className="text-lg mx-2"onClick={() => changeLanguage("en-us")}>EN</button>
    </div>
  );
};

export default ChangeLanguageBtns;
