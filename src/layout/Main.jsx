import ContextWrapper from '../context/context';
import Download from '../pages/download/Download';
import FormatInput from '../pages/input/FormatInput';
import UrlInput from '../pages/input/UrlInput';

const Main = () => {
  return (
    <ContextWrapper>
      <UrlInput />
      <section className="grid justify-items-center gap-8">
        <Download />
        <FormatInput />
      </section>
    </ContextWrapper>
  );
};

export default Main;
