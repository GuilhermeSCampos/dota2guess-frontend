import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { AiFillQuestionCircle } from "react-icons/ai";
import Countdown from "./Countdown";
import { MoveDown, MoveUp } from "lucide-react";
import ClassicCard from "./ClassicCard";
import { useProvider } from "../context/Provider";
import { useTranslation } from "react-i18next";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "rgb(11, 11, 11)",
  border: "2px solid ",
  boxShadow: 24,
  p: 5,
  height: "95%",
  overflowX: "auto",
  display: "block",
};

export default function ModalHelp() {
  const { t } = useTranslation();
  const { heroes } = useProvider();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    heroes && (
      <div className="">
        <AiFillQuestionCircle
          size={35}
          className="mx-3 mt-3 icon"
          onClick={handleOpen}
        />
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style} className="text-white ">
              <Typography
                id="transition-modal-title"
                className=""
                variant="h6"
                component="h2"
              >
                <h1 className="lg:text-5xl text-2xl">{t("How to Play")}</h1>
                <hr />
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <p className="lg:text-xl">
                  {t("Guess a hero from Dota 2 everyday! It resets every 24h.")}
                </p>
                <div className="text-5xl my-12 flex justify-center">
                  <div>
                    <p className="lg:text-lg  text-sm text-center">{t("Next hero in:")}</p>
                    <Countdown />
                    <p className="text-xs mt-4 text-center">
                      {t("Midnight at UTC-3")}
                    </p>
                  </div>
                </div>
                <h1 className="lg:text-5xl text-2xl">{t("Classic Game")}</h1>
                <hr></hr>
                <div>
                  <p className="my-2 lg:text-xl">
                    {t(
                      "Get started by choosing any hero and it will show its properties."
                    )}
                  </p>
                  <p className="my-2 lg:text-xl">
                    {t(
                      "Guide yourself by the colors and the arrows that will show up."
                    )}
                  </p>
                  <p className="my-2 lg:text-xl">
                    <span className="text-[#43A047]">{t("Green")}</span>{" "}
                    {t("indicates a correct property")}
                  </p>
                  <p className="my-3 lg:text-xl">
                    <span className="text-[#E53935]">{t("Red")}</span>{" "}
                    {t("indicates a wrong property")}
                  </p>
                  <div className="flex text-lg">
                    <MoveDown className="lg:w-[30px] w-[100px]"/> <MoveUp className="lg:w-[30px] w-[100px]"/>
                    <p>
                      {t(
                        "These arrows will indicate if the correct answer is below or above your guess"
                      )}
                    </p>
                  </div>
                  <h1 className="text-2xl mt-5">{t("Example:")}</h1>
                  <p>{t("Consider the correct answer is Oracle")}</p>
                  <p>{t("If you enter Gyrocopter, this will apear:")}</p>
                  <div className="w-screen flex my-5">
                    <ClassicCard
                      justify="justify-start"
                      correctHero={heroes.find((e) => e.name === "Oracle")}
                      selectedHero={heroes.find((e) => e.name === "Gyrocopter")}
                    />
                  </div>
                  <div className="text-xl mt-10">
                    <h2>
                      {t("Primary Attribute:")}{" "}
                      <span className="text-[#E53935]">{t("Red")}</span>
                    </h2>
                    <p className="text-lg">
                      {t("Its not a match since Oracle is Intelligence")}
                    </p>
                  </div>
                  <div className="text-xl mt-10">
                    <h2>
                      {t("Gender: ")}
                      <span className="text-[#43A047]">{t("Green")}</span>
                    </h2>
                    <p className="text-lg">
                      {t("Oracle is Male, so its an exact match!")}
                    </p>
                  </div>
                  <div className="text-xl mt-10">
                    <h2>
                      {t("Attack Type:")}{" "}
                      <span className="text-[#43A047]">{t("Green")}</span>
                    </h2>
                    <p className="text-lg">
                      {t("Oracle is Ranged, so its an exact match!")}
                    </p>
                  </div>
                  <div className="text-xl mt-10">
                    <h2>
                      {t("Base Attack:")}{" "}
                      <span className="text-[#E53935]">{t("Red")}</span>
                    </h2>
                    <p className="text-lg">
                      {t("Oracle's basic attack is lower than Gyrocopter's!")}
                    </p>
                  </div>
                  <div className="text-xl mt-10">
                    <h2>
                      {t("Base Armor:")}{" "}
                      <span className="text-[#E53935]">{t("Red")}</span>
                    </h2>
                    <p className="text-lg">
                      {t("Oracle's basic armor is lower than Gyrocopter's!")}
                    </p>
                  </div>
                  <div className="text-xl mt-10">
                    <h2>
                      {t("Base HP:")}{" "}
                      <span className="text-[#E53935]">{t("Red")}</span>
                    </h2>
                    <p className="text-lg">
                      {t("Oracle's base HP is lower than Gyrocopter's!")}
                    </p>
                  </div>
                  <div className="text-xl mt-10">
                    <h2>
                      {t("Base MP:")}{" "}
                      <span className="text-[#E53935]">{t("Red")}</span>
                    </h2>
                    <p className="text-lg">
                      {t("Oracle's base MP is greater than Gyrocopter's!")}
                    </p>
                  </div>
                  <div className="text-xl mt-10">
                    <h2 className="">
                      {t("Move Speed:")}{" "}
                      <span className="text-[#E53935]">{t("Red")} </span>
                    </h2>
                    <p className="text-lg">
                      {t(
                        "Oracle's base move speed is lower than Gyrocopter's!"
                      )}
                    </p>
                  </div>
                  <p className="text-xl mt-5">
                    {t("Then, if you guess it correctly, this will appear:")}
                  </p>
                  <div className="w-screen flex my-5">
                    <ClassicCard
                      justify="justify-start"
                      correctHero={heroes.find((e) => e.name === "Oracle")}
                      selectedHero={heroes.find((e) => e.name === "Oracle")}
                    />
                  </div>
                  <p className="mt-8">
                    {t(`I hope you have a good time playing! :)`)}
                  </p>
                </div>
              </Typography>
            </Box>
          </Fade>
        </Modal>
      </div>
    )
  );
}
