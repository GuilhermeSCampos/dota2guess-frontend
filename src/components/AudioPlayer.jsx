import { useState, useRef } from "react";
import { BsPlayCircleFill, BsStopCircleFill } from "react-icons/bs";

const AudioPlayer = ({ audioSource }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.currentTime = 0;
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const volumePercentage = e.target.value / 100;
    audioRef.current.volume = volumePercentage;
    setVolume(volumePercentage);
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div className="flex fade-in flex-col items-center border rounded-xl bg-gray-700 mb-5 p-5">
      <div className="flex flex-row items-center">
        <button onClick={toggleAudio}>
          {isPlaying ? (
            <BsStopCircleFill
              size={30}
              className="audio-player-btn transition duration-300"
            />
          ) : (
            <BsPlayCircleFill
              size={30}
              className="audio-player-btn transition duration-300"
            />
          )}
        </button>
        <p className="mx-5">Listen to the quote</p>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={volume * 100}
        onChange={handleVolumeChange}
        className="mt-3"
      />
      <audio ref={audioRef} src={audioSource} onEnded={handleAudioEnd}></audio>
    </div>
  );
};

export default AudioPlayer;
