import React, { createContext, useState } from 'react';

export const Context = createContext(null);

function ContextWrapper({ children }) {
  const [downloadFormat, setDownloadFormat] = useState('MP4');
  const [urlInput, setUrlInput] = useState('');

  return <Context.Provider value={{ downloadFormat, setDownloadFormat, urlInput, setUrlInput }}>{children}</Context.Provider>;
}

export default ContextWrapper;
