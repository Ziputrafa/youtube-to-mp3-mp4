import './App.css';

import { useState, useRef } from 'react';
import Header from './assets/components/Header/Header';
import Input from './assets/components/Input/Input';
import Download from './assets/components/Download/Download';

function App() {
  const [downloadUrl, setDownloadUrl] = useState('');
  const [inputPos, setInputPos] = useState();
  const [option, setOption] = useState('mp4');
  const [show, setShow] = useState('');

  return (
    <>
      <Header />
      <Input setDownloadUrl={setDownloadUrl} inputPos={setInputPos} option={option} setShow={setShow} />
      <Download downloadUrl={downloadUrl} setOption={setOption} show={show} />
      <section id="bg">
        <div></div>
        <div></div>
        <div></div>
      </section>
    </>
  );
}

export default App;
