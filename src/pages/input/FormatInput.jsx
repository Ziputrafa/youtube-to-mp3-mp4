import { useContext } from 'react';
import { Context } from '../../context/context';
import { downloadBtns } from '../../data/downloadBtns';

const FormatInput = () => {
  const { downloadFormat, setDownloadFormat } = useContext(Context);
  const downloadBtn = downloadBtns.map((btn) => (
    <button
      key={btn.id}
      className={downloadFormat === btn.type ? 'border-solid border-2 border-red-600 bg-[#ff0000] p-2 rounded-lg' : 'px-5 py-2  rounded-lg border-solid border-2 border-red-600'}
      onClick={() => setDownloadFormat(btn.type)}
    >
      {btn.type}
    </button>
  ));
  return (
    <article className="grid justify-around grid-cols-2 gap-5">
      {downloadBtn}

      {/* https://youtu.be/coUw3xLJY4k */}
    </article>
  );
};

export default FormatInput;
