import './Download.css';
import { useSpring, animated } from 'react-spring';
import { useState, useRef } from 'react';

const Download = ({ downloadUrl, setOption, show }) => {
  const downloadImg = useRef();

  const [highlightMp3, setHighlightMp3] = useState(false);
  const [highlightMp4, setHighlightMp4] = useState(true);

  const highlightMp3Toggle = () => {
    setHighlightMp3(!highlightMp3);
    setHighlightMp4(!highlightMp4);
  };
  const highlightMp4Toggle = () => {
    setHighlightMp3(!highlightMp3);
    setHighlightMp4(!highlightMp4);
  };
  console.log('download url ' + downloadUrl);
  return (
    <section id="download">
      <article className={show} id="format-options">
        <p>Select the File Format</p>
        <button className={highlightMp3 ? 'highlightMp3' : null} onClick={() => [setOption('mp3'), highlightMp3Toggle()]}>
          .MP3
        </button>
        <button className={highlightMp4 ? 'highlightMp4' : null} onClick={() => [setOption('mp4'), highlightMp4Toggle()]}>
          .MP4
        </button>
      </article>
      <button id="download-btn" className={show}>
        <a target="_blank" rel="noopener noreferrer" href={downloadUrl}>
          <img ref={downloadImg} src="src/assets/download.svg" />
        </a>
      </button>
    </section>
  );
};

export default Download;
