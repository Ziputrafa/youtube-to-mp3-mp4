import { useContext } from 'react';
import { Context } from '../../context/context';

const UrlInput = () => {
  const { setUrlInput } = useContext(Context);

  return <input className="py-2 px-5 rounded-full text-white-950 bg-white/[0.1]" type="url" placeholder="Paste the url here" onChange={(e) => setUrlInput(e.target.value)} />;
};

export default UrlInput;
