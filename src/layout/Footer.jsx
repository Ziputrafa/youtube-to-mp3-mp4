import { socialMedia } from '../data/socialMedia';

const Footer = () => {
  return (
    <footer className="flex gap-5 justify-center">
      {socialMedia.map((socialBtn) => (
        <a key={socialBtn.id} target="_blank" rel="noopener noreferrer" href={socialBtn.link}>
          <img className="cursor-pointer" src={socialBtn.iconUrl} />
        </a>
      ))}
    </footer>
  );
};

export default Footer;
