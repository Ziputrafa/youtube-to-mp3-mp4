import getResponse from '../../utils/getResponse';
import downloadIcon from '../../assets/download.svg';

const Download = () => {
  const [response, error] = getResponse();

  return (
    <>
      {error ? (
        <article className="text-center text-red-600 italic">{error}</article>
      ) : (
        <button className="w-7 center">
          <a target="_blank" rel="noopener noreferrer" href={response}>
            <img src={downloadIcon} />
          </a>
        </button>
      )}
    </>
  );
};

export default Download;
