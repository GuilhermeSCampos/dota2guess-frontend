import { useEffect, useState } from 'react';
import axios from 'axios';

const AudioPlayer = ({ src }) => {
  const [audioData, setAudioData] = useState('');

  useEffect(() => {
    const fetchAudioData = async () => {
      try {
        const response = await axios.get(src, {
          responseType: 'arraybuffer'
        });

        const audioBuffer = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ''
          )
        );
        
        const audioDataUri = `data:audio/mp3;base64,${audioBuffer}`;
        
        setAudioData(audioDataUri);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAudioData();
  }, [src]);

  return (
    <audio controls>
      <source src={audioData} type="audio/mp3" />
      Seu navegador não suporta a reprodução de áudio.
    </audio>
  );
};

export default AudioPlayer;
