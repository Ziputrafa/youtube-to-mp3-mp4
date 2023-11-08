import getResponse from '../../utils/getResponse';

const Download = () => {
  const [response, error] = getResponse();

  return (
    <>
      {error ? (
        <article className="text-center text-red-600 italic">{error}</article>
      ) : (
        <button className="w-7 center">
          <a target="_blank" rel="noopener noreferrer" href={response}>
            <img src="src/assets/download.svg" />
          </a>
        </button>
      )}
    </>
  );
};

export default Download;
