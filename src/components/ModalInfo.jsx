import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { AiFillInfoCircle } from "react-icons/ai";

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
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="">
      <AiFillInfoCircle
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
          <Box sx={style} className="text-white">
            <Typography
              id="transition-modal-title"
              className=""
              variant="h6"
              component="h2"
            >
              <h1 className="text-5xl">About</h1>
              <hr />
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <p className="text-2xl">Guess a hero daily!</p>
              <br />
              <br />
              <p className="text-lg">
                Dota2Guess was created for fun and practicing purposes only and
                greatly inspired By:{" "}
                <a
                  href="https://term.ooo/"
                  target="blank"
                  className="text-cyan-600"
                >
                  Termo{" "}
                </a>
                and{"  "}
                <a
                  href="https://loldle.net/"
                  target="blank"
                  className="text-cyan-600"
                >
                  Loldle
                </a>
              </p>
              <br />
              <p className="text-lg">
                Valve Corporation DOES NOT endorse or sponsor this project.
              </p>
              <br />
              <br />
              <p>
                Background URL:{" "}
                <a
                  href="https://dmarket.com/blog/best-dota2-wallpapers/jager1_hu1b4a36ef01c87d5ebc4581a2b5b7191b_364471_1920x1080_resize_q100_lanczos.jpg"
                  target="blank"
                  className="text-cyan-600"
                >
                  {`https://dmarket.com/blog/best-dota2-wallpapers/`}
                </a>
              </p>
              <br />
              <br />
              <br />
              <h1 className="text-5xl">Feedbacks</h1>
              <hr />
              <br />
              <p className="text-lg">Have a suggestion or found an error?🤠</p>
              <p className="text-lg">
                {" "}
                Send me a mail {` -->  inabanhimekoo@gmail.com`}{" "}
              </p>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
