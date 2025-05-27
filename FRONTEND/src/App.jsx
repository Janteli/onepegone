import { useEffect, useState } from 'react';
import comingSoonVideo from '../src/assets/Background.mp4';

const topText = 'THYNK UNLIMITED';
const middleText = 'STAY TUNED';
const mainText = 'COMING SOON';
const webText = 'WWW.ONEPEGPONE.COM';

function useTypewriterLoop(fullText, startIndex = 1, delay = 150) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(startIndex);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timer;

    if (isTyping) {
      if (index <= fullText.length) {
        timer = setTimeout(() => {
          setText(fullText.slice(startIndex, index));
          setIndex(prev => prev + 1);
        }, delay);
      } else {
        // Pause after typing
        timer = setTimeout(() => {
          setIsTyping(false);
        }, 1500);
      }
    } else {
      // Clear all text and restart
      timer = setTimeout(() => {
        setText('');
        setIndex(startIndex);
        setIsTyping(true);
      }, 500); // pause before restarting
    }

    return () => clearTimeout(timer);
  }, [index, isTyping, fullText, startIndex, delay]);

  return text;
}

function App() {
  const typedTop = useTypewriterLoop(topText);
  const typedMiddle = useTypewriterLoop(middleText);
  const typedWeb = useTypewriterLoop(webText);

  return (
    <div className="relative w-full h-screen font-sans overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={comingSoonVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Grid Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10 grid grid-cols-1 md:grid-cols-2">
        {/* Empty column (optional) */}
        <div></div>

        {/* Text content */}
        <div className="flex flex-col pt-8 text-left text-white px-8 space-y-6">
          <h1 className="text-sm md:text-xs font-bold text-center md:text-left tracking-[0.3em]">
            {topText.charAt(0)}{typedTop}
            <span className="animate-pulse">|</span>
          </h1>
          <h2 className="text-lg md:text-xl mt-28 font-light text-center md:text-left">
            {middleText.charAt(0)}{typedMiddle}
            <span className="animate-pulse">|</span>
          </h2>
          <h3 className="text-4xl md:text-7xl font-extrabold text-center md:text-left">
            {mainText}<span className="animate-pulse">|</span>
          </h3>
          <p className="text-sm md:text-xs tracking-[0.3rem] font-bold text-mint-500 mt-30 text-center md:text-left">
            {webText.charAt(0)}{typedWeb}
            <span className="animate-pulse">|</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
