import { useEffect, useContext, useState } from 'react';
import getYoutubeId from './getYoutubeId';
import { Context } from '../context/context';
import axios from 'axios';

const getResponse = () => {
  const { urlInput, downloadFormat } = useContext(Context);
  const youtubeVideoId = getYoutubeId(urlInput);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDownloadUrl = async () => {
      if (youtubeVideoId) {
        try {
          const config = {
            method: 'GET',
            url: downloadFormat === 'MP4' ? import.meta.env.VITE_MP4_URL : import.meta.env.VITE_MP3_URL,
            params: {
              id: youtubeVideoId,
            },
            headers: {
              'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
              'X-RapidAPI-Host': downloadFormat === 'MP4' ? import.meta.env.VITE_API_HOST_MP4 : import.meta.env.VITE_API_HOST_MP3,
            },
          };
          setError(null);
          const response = await axios.request(config);
          setResponse(downloadFormat === 'MP4' ? response.data.link[22][0] : response.data.link);
        } catch (error) {
          if (error.response.status === 429) {
            setError('You have exceeded the DAILY quota for Requests');
          } else {
            setError(error.message);
          }
        }
      } else {
        setError('Paste the correct link');
      }
    };
    getDownloadUrl();
  }, [downloadFormat, youtubeVideoId]);

  return [response, error];
};

export default getResponse;
