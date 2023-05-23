import { useState } from "react";
import PropTypes from "prop-types";

const AudioPlayer = ({ src }) => {
  const [volume, setVolume] = useState(1);

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  return (
    <div>
      <audio controls data-volume="0.5">
        <source src={src} type="audio/mpeg" />
      </audio>

      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={volume}
        onChange={handleVolumeChange}
      />
    </div>
  );
};

AudioPlayer.propTypes = {
  src: PropTypes.string.isRequired,
};

export default AudioPlayer;
