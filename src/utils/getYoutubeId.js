const getYoutubeId = (url) => {
  // get the youtube video url id

  const regulerExpression = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;

  const found = url.match(regulerExpression);

  return found && found[7].length == 11 ? found[7] : null;
};

export default getYoutubeId;
