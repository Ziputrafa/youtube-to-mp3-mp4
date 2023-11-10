import youtubeLogo from '../assets/youtube.svg';
const Header = () => {
  return (
    <header className="grid gap-4 justify-items-center">
      <img className="w-2/5" id="yt-logo" src={youtubeLogo} />
      <h1 className="text-3xl text-center">YouTube to .MP3 .MP4</h1>
    </header>
  );
};

export default Header;
