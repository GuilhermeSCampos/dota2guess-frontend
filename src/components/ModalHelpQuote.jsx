import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { AiFillQuestionCircle } from "react-icons/ai";
import Countdown from "./Countdown";
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
  height: "auto",
  overflowX: "hidden",
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
                <h1 className="text-5xl">{t("How to Play")}</h1>
                <hr />
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <p className="text-xl">
                  {t("Guess a hero from Dota 2 everyday! It resets every 24h.")}
                </p>
                <div className="text-5xl my-12 flex justify-center">
                  <div>
                    <p className="text-lg text-center">{t("Next hero in:")}</p>
                    <Countdown />
                    <p className="text-xs mt-4 text-center">
                      {t("Midnight at UTC-3")}
                    </p>
                  </div>
                </div>
                <h1 className="text-5xl">{t("Quote Game")}</h1>
                <hr></hr>
                <div className="mt-5 text-lg">
                  <p>{t("In quote mode, you will need to guess which hero says the sentence during heroes selection or when the game begins.")}</p>
                  <p className="my-2">{t("You can listen to the quote after a certain number of tries or if you guess it correctly before.")}</p>
                  <p className="mt-8">{t(`I hope you have a good time playing! :)`)}</p>
                </div>
              </Typography>
            </Box>
          </Fade>
        </Modal>
      </div>
    )
  );
}
