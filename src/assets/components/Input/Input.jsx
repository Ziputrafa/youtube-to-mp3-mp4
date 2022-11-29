import { useState, useRef } from 'react';
import './Input.css';

const Input = ({ setDownloadUrl, inputPos, option, setShow }) => {
  const [idLink, setIdLink] = useState('');
  const [endpoint, setEndpoint] = useState('');
  const [vidUrl, setVidUrl] = useState([]);

  const inputPlace = useRef();

  if (option === 'mp4') {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '7024913386msh381330ea9600fa4p148292jsnd3f27d64bae2',
        'X-RapidAPI-Host': 'youtube-videos.p.rapidapi.com',
      },
    };

    const mp4 = () => {
      fetch('https://youtube-videos.p.rapidapi.com/mp4?videoId=' + idLink, options)
        .then((response) => response.json())
        .then((response) => setEndpoint(response.items[1].url))
        .catch((err) => console.error(err));

      // return setEndpoint(response.adaptiveFormats[0].url);
    };
    mp4();
  } else if (option === 'mp3') {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '0c6342b855mshfe99497250db15fp1bfde4jsn2a4c8a137699',
        'X-RapidAPI-Host': 'youtube-mp3-download1.p.rapidapi.com',
      },
    };
    const mp3 = () => {
      fetch('https://youtube-mp3-download1.p.rapidapi.com/dl?id=' + idLink, options)
        .then((response) => response.json())
        .then((response) => setEndpoint(response.link))
        .catch((err) => console.error(err));
      // return setEndpoint(response.link);
    };

    mp3();
  }

  console.log('endpoint ' + endpoint);

  console.log('vidurl ' + vidUrl);

  function youtube_parser(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  }
  console.log('option ' + option);
  console.log('endpoint ' + endpoint);
  return (
    <section id="input-container">
      <input id="inputUrl" type="url" ref={inputPlace} placeholder="Paste the url here" />
      <button className="icon-btn" onClick={() => [setIdLink(youtube_parser(inputPlace.current.value)), setShow('show')]}>
        <img src="src/assets/arrow-small-right.svg" />
      </button>

      {/* <p>https://youtu.be/aqW4xXUgmno</p> */}
      {/* <p>https://www.youtube.com/watch?v=Qqm2MHtcH4E</p> */}
      {/* <p>https://youtu.be/jEdfjuG0Fx4</p> */}
      <br />
      {setDownloadUrl(endpoint)}
      {/* {inputPos(inputPlace.current.offsetLeft)} */}
    </section>
  );
};

export default Input;
